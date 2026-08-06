import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIStudent = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setStudents(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch student data. Please try again later.');
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);
    //This is the filtering logic that checks if the search term is present in any of the student fields (name, id, phone, email). It splits the search term into individual words and checks if all words are present in any of the fields. If no search term is provided, it returns all students.
    const filteredStudents = students.filter(student => {
        const terms = searchTerm.toLowerCase().split(' ').filter(Boolean);

        if (terms.length === 0) return true;
        
        return terms.every(term => 
            student.name?.toLowerCase().includes(term) ||
            student.id?.toString().toLowerCase().includes(term) ||
            student.phone?.toLowerCase().includes(term) ||
            student.email?.toLowerCase().includes(term)
        );
    });
    
    return (
        <div>
            <br />
            <style>
                {`
                table {
                    width: 100%; 
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
                tr:hover {
                    background-color: #f1f1f1;
                }   
                input {
                    border: 1px solid #ccc;
                    padding: 8px;
                    margin-bottom: 10px;
                    width: 100%;
                    max-width: 300px;
                }
                .spinner {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border-left-color: #09f;
                    animation: spin 1s linear infinite;
                    margin: 20px auto;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .error {
                    color: red;
                    margin-top: 10px;
                }
                .no-results {
                    margin-top: 15px;
                    color: #666;
                    font-style: italic;
                }
                `}
            </style>
            
            <input
                type="text"
                placeholder="Search by name, ID, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {loading ? (
                <div className="spinner"></div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : filteredStudents.length === 0 ? (
                <div className="no-results">No students found matching your criteria.</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th style={{ color: 'black' }}>ID</th>
                            <th style={{ color: 'black' }}>Name</th>
                            <th style={{ color: 'black' }}>Email</th>
                            <th style={{ color: 'black' }}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default APIStudent;