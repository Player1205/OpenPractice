//to call an api as json placeholder .students and it has an array of objects and each object has id,name and i need to display it

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const APICall = () => {
    const [students, setStudents] = useState([]);
    
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <strong>{student.name}</strong> - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default APICall;
