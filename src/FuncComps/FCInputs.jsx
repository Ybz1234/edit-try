import React from 'react'

import { TextField, Button } from '@mui/material';
import AddStudent from '@mui/icons-material/Person'

export default function FCInputs(props) {

    let name, grade;

    const btnAddStudent = () => {
        let student = {name, grade};
        props.sendStudent(student);
    }

    return (
        <>
            <TextField type='text' label="Enter your name here" color="success" id="outlined-multiline-flexible" onChange={(e) => name = e.target.value} style={{ marginBottom: '10px' }} /> <br />
            <TextField type='number' label="Enter your grade here" color="success" id="outlined-multiline-flexible" onChange={(e) => grade = e.target.value} style={{ marginBottom: '10px' }} /> <br />
            <Button variant="contained" endIcon={<AddStudent/>} onClick={(btnAddStudent)} style={{ marginTop: '10px' }}>Add student</Button>
        </>
    );
}