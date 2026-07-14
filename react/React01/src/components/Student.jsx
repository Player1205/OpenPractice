import React from 'react'

const Student = (props) => {
  return (
    <div>
    <h3>Student Name: {props.name}</h3>
    <h3>Student ID: {props.id}</h3>
    <h3>Student Email: {props.email}</h3>
    <h1>{props.children}</h1>
    </div>
  )
}

export default Student
