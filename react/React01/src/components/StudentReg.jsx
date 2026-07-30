import {React, useState} from 'react';

function StudentReg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, email, course, age };
    setSubmittedData([...submittedData, newStudent]);
    setName('');
    setEmail('');
    setCourse('');
    setAge('');
  }
  
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <br />
        <br />
      <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Student Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ fontSize: '2rem', padding: '1rem 2rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ fontSize: '2rem', padding: '1rem 2rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={{ fontSize: '2rem', padding: '1rem 2rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} style={{ fontSize: '2rem', padding: '1rem 2rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ fontSize: '2rem', padding: '1rem 2rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Submit</button>
      </form>
        <div style={{ marginTop: '2rem', width: '50%' }}>   
        <h3 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Submitted Data</h3>
        <br />
        {submittedData.map((student, index) => (
          <div key={index} style={{ fontSize: '2rem', padding: '1rem 2rem', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}>
            <p style = {{textAlign: 'left'}}><strong>Name:</strong> {student.name}</p>
            <br />
            <p style = {{textAlign: 'left'}}><strong>Email:</strong> {student.email}</p>
            <br />
            <p style = {{textAlign: 'left'}}><strong>Course:</strong> {student.course}</p>
            <br />
            <p style = {{textAlign: 'left'}}><strong>Age:</strong> {student.age}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default StudentReg;