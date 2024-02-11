import React from 'react';

import List from '@mui/material/List';
import StudentItem from './FCStudentItem';

export default function FCStudentsList(props) {
    const handleEdit = (studentId) => {
        props.setEditingStudent(studentId);
    };

    const handleSaveEdit = (studentId) => {
        props.handleSaveEdit(studentId);
    };

    const handleDelete = (studentId) => {
        const updatedStudents = props.students.filter(student => student.id !== studentId);
        props.sendUpdatedListToParent(updatedStudents);
    };

    return (
        <List>
            {props.students.map(student => (
                <StudentItem
                    key={student.id}
                    student={student}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onInputChange={props.onInputChange}
                    onSaveEdit={handleSaveEdit}
                    editingStudent={props.editingStudent}
                    editedName={props.editedName}
                />
            ))}
        </List>
    );
}