import './App.css'
import StudentComponent from './components/StudentComponent.jsx'

function App() {
 const studentinformation = [
  {
   name : "101",
   age : 20,
   course : "B.tech"
  },
  {
   name : "102",
   age : 20,
   course : "B.tech"
  },
  {
   name : "103",
   age : 20,
   course : "B.tech"
  }
 ];

  return (
    <>
      {studentinformation.map((student, index) => (
        <StudentComponent
          key={index}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}
    </>
  )
}

export default App