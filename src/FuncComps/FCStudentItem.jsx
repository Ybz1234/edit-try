import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FolderIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

export default function FCStudentItem(props) {
    const handleInputChange = (field, editedInput) => {
        props.onInputChange(props.student.id, field, editedInput);
    };

    const handleSaveEdit = () => {
        props.onSaveEdit(props.student.id);
    };

    const handleDelete = () => {
        props.onDelete(props.student.id);
    };

    return (
        <ListItem
            key={props.student.id}
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={() => props.onEdit(props.student.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" color="error" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    {props.editingStudent === props.student.id && (
                        <IconButton variant="contained" color="primary" size="small" onClick={handleSaveEdit}>
                            <SaveIcon />
                        </IconButton>
                    )}
                </>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.editingStudent === props.student.id ? (
                    <>
                        <TextField
                            label="Edit Name"
                            value={props.editedName}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                        <TextField
                            label="Edit Grade"
                            value={props.editedGrade}
                            onChange={(e) => handleInputChange('grade', e.target.value)}
                        />
                    </>
                ) : (
                    `${props.student.name} -> ${props.student.grade}`
                )}
            />
        </ListItem>
    );
}
