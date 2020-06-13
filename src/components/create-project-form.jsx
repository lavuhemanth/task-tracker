import React from 'react';
import { Formik } from 'formik';
import InputField from './common/input-field';
import DatePicker from './common/date-picker';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core';

const handleOnChange = (props, e) => {
    props.setValue(props.fieldName, e)
}

const CreateProjectForm = (props) => {
    const { open, handleClose } = props;

    return (<div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
            <Formik
                initialValues={{
                    projectName: '',
                    projectDate: new Date().toISOString()
                }}
                validate={values => {
                    const errors = {};
                    if (!values.projectName) {
                        errors.projectName = 'Required';
                    }
                    // if (!values.projectName) {
                    //     errors.projectName = 'Required';
                    // }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleClose();
                    }, 400);
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    handleSubmit,
                    isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <DialogContent>
                                <InputField type="text" id="projectName"
                                    label="Project Title"
                                    name="projectName"
                                    value={values.projectName}
                                    handleChange={handleChange}
                                    onBlur={handleBlur} />
                                <DatePicker fieldName="projectDate" dateValue={values.projectDate} setValue={setFieldValue} handleDateChange={handleOnChange} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary" disabled={isSubmitting}>
                                    Save
                                </Button>
                            </DialogActions>
                        </form>
                    )}
            </Formik>
        </Dialog>
    </div>);
}

export default CreateProjectForm;