import React, { useState } from 'react';

function AcademicDash() {
    const [students, setStudents] = useState([
        {
          id: 1, name : "Arshpreet Singh", age: 20 , course: "Computer Science and Engineering", grade: "A"
        },
        {
           id: 2, name : "Rahul Singh", age: 100 , course: "Computer Science and Engineering", grade: "F"
        },
        {
           id: 3, name : "Kunal Dhaliwal", age: 21 , course: "B Pharma", grade: "O+"
        },
        {
           id: 4, name : "Kirandeep Kaur", age: 19 , course: "Bcom", grade: "D"
        },
        {
           id: 5, name : "Vanshika Binani", age: 20 , course: "Computer Science and Engineering", grade: "A"
        },
        {
           id: 6, name : "Ronak", age: 22 , course: "Computer Science and Engineering", grade: "B"
        },
        ]);
        
        return (
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
                <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", textAlign: "center" }}>
                    <h1>Academic Dashboard</h1>
                </header>
                
                <div style={{ display: "flex", flex: 1 }}>
                    <aside style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "10px" }}>
                        <h2>Sidebar</h2>
                        <ul style={{padding: 0 , margin: 0, color: "#333", listStyleType: "none", gap: "10px", display: "flex", flexDirection: "column", backgroundColor: "#812f2f8d", padding: "10px", borderRadius: "4px"}}>
                            <li>Home</li>
                            <li>Students</li>
                            <li>Courses</li>
                            <li>Grades</li>
                        </ul>
                    </aside>
                    <main style={{ flex: 1, padding: "10px"}}>
                        <h2>Student List</h2>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {students.map((student) => (
                                <li style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "4px", display: "block", textAlign: "left", color: "#333" }} key={student.id}>
                                    {student.name} - Age: {student.age}, Course: {student.course}, Grade: {student.grade}
                                </li>
                            ))}
                        </ul>
                    </main>
                </div>
                <footer style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", textAlign: "center" }}>
                    <p>&copy;x 2023 Academic Dashboard. All rights reserved.</p>
                </footer>
            </div>
        );
}

export default AcademicDash;