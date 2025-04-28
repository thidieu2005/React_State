import React, { Component } from 'react';
import { getStudents } from './data';
import './App.css'; 
class State_getData extends Component{
    constructor(props) {
        super(props);
        var arr = getStudents();
        this.state = {arr,  filterGender: 'All', // All, Nam, Nữ
            filterAge: 'All',     // All, >20, <=20
            filterMajor: 'All'};
    }
    
    handleGenderFilter = (e) => {
        this.setState({ filterGender: e.target.value });
    }

    handleAgeFilter = (e) => {
        this.setState({ filterAge: e.target.value });
    }

    handleMajorFilter = (e) => {
        this.setState({ filterMajor: e.target.value });
    }

    getFilteredStudents = () => {
        const { arr, filterGender, filterAge, filterMajor } = this.state;
        return arr.filter(student => {
            let genderMatch = filterGender === 'All' || student.gender === filterGender;
            let ageMatch = filterAge === 'All' || 
                           (filterAge === '>20' ? student.age > 20 : student.age <= 20);
            let majorMatch = filterMajor === 'All' || student.major.includes(filterMajor);
            return genderMatch && ageMatch && majorMatch;
        });
    }
   render() {
    return (
        <div className="container">
            {this.state.arr.map((student, index) => (
                <div className="student-card" key={index}>
                    <h2>{student.name}</h2>
                    <h2>Tuổi: {student.age}</h2>
                    <h2>Gender: {student.gender}</h2>
                    <h2>Major: {student.major}</h2>
                    <h2>Email: {student.email}</h2>
                </div>
            ))}
               {/* Filter */}
                <div className="filters">
                    <select onChange={this.handleGenderFilter}>
                        <option value="All">Tất cả giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>

                    <select onChange={this.handleAgeFilter}>
                        <option value="All">Tất cả độ tuổi</option>
                        <option value=">20">Trên 20 tuổi</option>
                        <option value="<=20">20 tuổi trở xuống</option>
                    </select>

                    <select onChange={this.handleMajorFilter}>
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

}
export default State_getData;
