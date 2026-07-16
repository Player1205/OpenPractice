const StudentComponent = ({ name, age, course, children }) => {
  return (
    <div>
      {children}
      <h1>Student Information</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
      {children}
    </div>
  )
}

export default StudentComponent