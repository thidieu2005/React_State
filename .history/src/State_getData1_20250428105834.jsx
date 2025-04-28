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
