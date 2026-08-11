import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const initialStudents = [
  { id: 1, name: "Vansh Rana", course: "B.Tech CSE", age: 20 },
  { id: 2, name: "Rahul Sharma", course: "B.Tech IT", age: 21 },
  { id: 3, name: "Priya Singh", course: "B.Tech CSE", age: 20 }
];

function StudentList({ students }) {
  return (
    <div>
      <h2>Student Directory</h2>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>

          <Link to={`/student/${student.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

function StudentDetails({ students }) {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Course:</b> {student.course}</p>
      <p><b>Age:</b> {student.age}</p>

      <Link to="/">Back to Student List</Link>
    </div>
  );
}

function RegisterStudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name: name,
      course: course,
      age: Number(age)
    };

    setStudents([...students, newStudent]);

    setName("");
    setCourse("");
    setAge("");

    alert("Student Registered Successfully!");
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Course: </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

function App() {
  const [students, setStudents] = useState(initialStudents);

  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "15px",
          backgroundColor: "#222"
        }}
      >
        <Link
          to="/"
          style={{ color: "white", marginRight: "20px" }}
        >
          Students
        </Link>

        <Link
          to="/register"
          style={{ color: "white" }}
        >
          Register Student
        </Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={<StudentList students={students} />}
          />

          <Route
            path="/student/:id"
            element={<StudentDetails students={students} />}
          />

          <Route
            path="/register"
            element={
              <RegisterStudent
                students={students}
                setStudents={setStudents}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;