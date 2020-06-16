import React from 'react';
import { Formik } from 'formik';
import InputField from './common/input-field';
import DatePicker from './common/date-picker';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core';

import { database } from '../auth/firebase-config';

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
                    title: '',
                    projectDate: new Date().toISOString()
                }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    }
                    // if (!values.title) {
                    //     errors.title = 'Required';
                    // }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        let id = Date.now();
                        let project = {
                            id: id,
                            ...values
                        }
                        let projectRef = database.ref('/').child('projects');

                        projectRef.push({
                            ...project
                        })
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
                                <InputField type="text" id="title"
                                    label="Project Title"
                                    name="title"
                                    value={values.title}
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