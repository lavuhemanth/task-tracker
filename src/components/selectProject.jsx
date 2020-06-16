import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AutoCompleteInput from './common/auto-complete-input';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import CreateProjectForm from './create-project-form';


const SelectProject = (props) => {
    debugger
    const { value, fieldName, handleChange, projectsList } = props
    const [open, setOpen] = useState(false);


    return (
        <div>
            {projectsList?.length ? (<AutoCompleteInput options={projectsList} fieldName={fieldName} value={value} handleChange={handleChange} />) :
                (<Button color="primary" type="button" startIcon={<AddCircleOutlineIcon />} onClick={() => setOpen(true)}>
                    Project
                </Button>)}

            <CreateProjectForm open={open} handleClose={setOpen(false)} />
        </div>
    );
}

export default SelectProject;