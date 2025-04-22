import React, { useState, useEffect } from 'react';
import { getStudents } from './data';
import './App.css';

function State_getData() {
  const [arr, setArr] = useState([]);

  // useEffect sẽ chạy 1 lần sau khi component render
  useEffect(() => {
    const data = getStudents();
    setArr(data);
  }, []);

  return (
    <div className="container">
      {arr.map((student, index) => (
        <div className="student-card" key={index}>
          <h2>{student.name}</h2>
          <h2>Tuổi: {student.age}</h2>
          <h2>Gender: {student.gender}</h2>
          <h2>Major: {student.major}</h2>
          <h2>Email: {student.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default State_getData;
