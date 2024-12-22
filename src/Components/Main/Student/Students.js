import React, { useState } from 'react';
import StudentItem from './StudentItem';
import Data from '../../Data/Students.json';

function Students({ search }) {
    const [students] = useState(Data);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {filteredStudents.map((student) => (
                <StudentItem key={student.id} student={student} />
            ))}
        </div>
    );
}

export default Students;
