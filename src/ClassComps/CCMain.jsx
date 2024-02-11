import React, { Component } from 'react';

import FCInputs from '../FuncComps/FCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

const studentsInit = [];

export default class CCMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: studentsInit,
            counter: studentsInit.length,
            editingStudent: null,
            editedName: '',
            editedGrade: '',
        };
    }

    getStudent = (student) => {
        let newCounter = this.state.counter + 1;
        student.id = newCounter;
        let newStudents = [...this.state.students, student];

        this.setState({
            students: newStudents,
            counter: newCounter,
        });
    };

    getUpdatedListFromChild = (updatedStudents) => {
        console.log(updatedStudents);
        this.setState({ students: updatedStudents });
    };

    setEditingStudent = (studentId) => {
        this.setState({ editingStudent: studentId, editedName: '', editedGrade: '' });
    };

    handleInputChange = (studentId, field, value) => {
        this.setState({
            [field === 'name' ? 'editedName' : 'editedGrade']: value,
        });
    };

    handleSaveEdit = (studentId) => {
        this.setState((prevState) => {
            const updatedStudents = prevState.students.map((student) => {
                if (student.id === studentId) {
                    return {
                        ...student,
                        name: prevState.editedName !== '' ? prevState.editedName : student.name,
                        grade: prevState.editedGrade !== '' ? prevState.editedGrade : student.grade,
                    };
                }
                return student;
            });
    
            return {
                students: updatedStudents,
                editingStudent: null,
                editedName: '',
                editedGrade: '',
            };
        });
    };
    

    render() {
        console.log(this.state.students);
        return (
            <>
                <h3>Students list</h3>
                <FCInputs sendStudent={this.getStudent} />
                <FCStudentsList
                    students={this.state.students}
                    sendUpdatedListToParent={this.getUpdatedListFromChild}
                    setEditingStudent={this.setEditingStudent}
                    onInputChange={this.handleInputChange}
                    handleSaveEdit={this.handleSaveEdit}
                    editingStudent={this.state.editingStudent}
                    editedName={this.state.editedName}
                    editedGrade={this.state.editedGrade}
                />
            </>
        );
    }
}
