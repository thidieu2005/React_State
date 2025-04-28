// import React, { useState, useEffect } from 'react';
// import { getStudents } from './data';
// import './App.css';

// function State_getData1() {
//   const [arr, setArr] = useState([]); // Ban đầu là mảng rỗng

//   useEffect(() => {
//     const data = getStudents(); // Gọi hàm getStudents để lấy data
//     setArr(data);               // Cập nhật state arr
//   }, []);

//   return (
//     <div className="container">
//       {arr.map((student, index) => (
//         <div className="student-card" key={index}>
//           <h2>{student.name}</h2>
//           <h2>Tuổi: {student.age}</h2>
//           <h2>Gender: {student.gender}</h2>
//           <h2>Major: {student.major}</h2>
//           <h2>Email: {student.email}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default State_getData1;



import React, { useState, useEffect } from 'react';
import { getStudents } from './data';
import './App.css';

function State_getData1() {
  const [arr, setArr] = useState([]); // Dữ liệu sinh viên
  const [filterGender, setFilterGender] = useState('All'); // Bộ lọc giới tính
  const [filterAge, setFilterAge] = useState('All');        // Bộ lọc độ tuổi
  const [filterMajor, setFilterMajor] = useState('All');    // Bộ lọc ngành học

  useEffect(() => {
    const data = getStudents(); 
    setArr(data); 
  }, []);

  const handleGenderFilter = (e) => {
    setFilterGender(e.target.value);
  };

  const handleAgeFilter = (e) => {
    setFilterAge(e.target.value);
  };

  const handleMajorFilter = (e) => {
    setFilterMajor(e.target.value);
  };

  const getFilteredStudents = () => {
    return arr.filter(student => {
      let genderMatch = filterGender === 'All' || student.gender === filterGender;
      let ageMatch = filterAge === 'All' || 
                     (filterAge === '>20' ? student.age > 20 : student.age <= 20);
      let majorMatch = filterMajor === 'All' || student.major.includes(filterMajor);
      return genderMatch && ageMatch && majorMatch;
    });
  };

  const filteredStudents = getFilteredStudents();

  return (
    <div className="container">
      {/* Filter */}
      <div className="filters">
        <select onChange={handleGenderFilter}>
          <option value="All">Tất cả giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>

        <select onChange={handleAgeFilter}>
          <option value="All">Tất cả độ tuổi</option>
          <option value=">20">Trên 20 tuổi</option>
          <option value="<=20">20 tuổi trở xuống</option>
        </select>

        <select onChange={handleMajorFilter}>
          <option value="All">Tất cả ngành học</option>
          <option value="Công nghệ thông tin">Công nghệ thông tin</option>
          <option value="Kỹ thuật phần mềm">Kỹ thuật phần mềm</option>
          <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
          <option value="Kinh tế">Kinh tế</option>
          <option value="Ngôn ngữ Anh">Ngôn ngữ Anh</option>
          <option value="Khoa học dữ liệu">Khoa học dữ liệu</option>
        </select>
      </div>

      {/* Hiển thị Sinh viên */}
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <div className="student-card" key={index}>
            <h2>{student.name}</h2>
            <h2>Tuổi: {student.age}</h2>
            <h2>Giới tính: {student.gender}</h2>
            <h2>Ngành học: {student.major}</h2>
            <h2>Email: {student.email}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default State_getData1;
