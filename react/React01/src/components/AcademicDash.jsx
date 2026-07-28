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
        {
           id: 7, name : "Vanshika Binani", age: 20 , course: "Computer Science and Engineering", grade: "A"
        },
        {
           id: 8, name : "Ronak", age: 22 , course: "Computer Science and Engineering", grade: "B"
        },
        ]);
        
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                fontFamily: "Arial, sans-serif"
                }}>
                <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", textAlign: "center" }}>
                    <h1>Academic Dashboard</h1>
                </header>
                
                <div style={{ display: "flex", flex: 1 }}>
                    <aside style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "10px" }}>
                        <h2>Sidebar</h2>
                        <ul style={{padding: 0 , margin: 0, color: "#050202", listStyleType: "none", gap: "10px", display: "flex", flexDirection: "column", backgroundColor: "#4510108d", padding: "10px", borderRadius: "4px"}}>
                            <li style={{ padding: "10px", backgroundColor: "#812f2f8d", borderRadius: "4px" }}>Home</li>
                            <li style={{ padding: "10px", backgroundColor: "#812f2f8d", borderRadius: "4px" }}>Students</li>
                            <li style={{ padding: "10px", backgroundColor: "#812f2f8d", borderRadius: "4px" }}>Courses</li>
                            <li style={{ padding: "10px", backgroundColor: "#812f2f8d", borderRadius: "4px" }}>Grades</li>
                        </ul>
                    </aside>
                    <main style={{
                        flex: 1,
                        padding: "20px",
                        width: "100%"
                    }}>
                        <h2>Student List</h2>
                        <ul 
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: "20px",
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                width: "100%"
                            }}>
                            {students.map((student) => (
                            <li
                                key={student.id}
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    border: "1px solid #ddd",
                                    borderRadius: "6px",
                                    padding: "20px",
                                    textAlign: "center",
                                    minHeight: "180px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    color: "#333",
                                }}>
                                <h2 style={{ margin: "0 0 15px 0" }}>{student.name}</h2>

                                <p><strong>ID:</strong> {student.id}</p>
                                <p><strong>Age:</strong> {student.age}</p>
                                <p><strong>Course:</strong> {student.course}</p>
                                <p><strong>Grade:</strong> {student.grade}</p>
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