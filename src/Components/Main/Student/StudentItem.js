import React from 'react'

function StudentItem({ student }) {
  return (
    <div style={{ border: '1px solid #00796B', padding: '1rem', borderRadius: '5px' }}>
            <h3>{student.name}</h3>
            <p>{student.email}</p>
    </div>
  )
}

export default StudentItem
