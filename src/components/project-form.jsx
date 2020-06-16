import React, { Component } from 'react';
import { Formik } from 'formik';
import InputField from './common/input-field';
import DatePicker from './common/date-picker';
import TimePicker from './common/time-picker';
import AutoCompleteInput from './common/auto-complete-input'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateProjectForm from './create-project-form'
import { database } from '../auth/firebase-config'

import '../assets/main.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});


// let projectList = []

class ProjectForm extends Component {

    _isMounted = false;
    constructor(props) {
        super();
        this.state = {
            taskForm: {
                taskName: '',
                project: null,
                taskDate: new Date().toISOString(),
                startTime: new Date().toISOString(),
                endTime: new Date().toISOString(),
            },
            open: false,
            projectList: []
        }
    }


    handleClickOpen(props) {
        const updateState = {
            ...props,
            open: true
        }
        this.setState({
            ...updateState
        });
    };

    handleClose() {
        const updateState = {
            ...this.state,
            open: false
        }
        this.setState({
            ...updateState,
        });
    };

    handleOnChange(props, e) {
        props.setValue(props.fieldName, e)
    }
    handleOnAutoCompleteChange(props, e) {
        const { projectList } = this.state;
        projectList.forEach((option) => {
            if (option.title === e.target.innerText) {

                this.setState({
                    ...this.state,
                    taskForm: {
                        project: option,
                    }
                })
                props.setValue(props.fieldName, option)
            }
            console.log("autocomplete state :: ", this.state);
        });
    }

    getProjectsRef = database.ref('/')
    componentDidMount() {
        this._isMounted = true;
        this.getProjectsRef.once('value').then((snapshot) => {
            console.log("SNap from db :: ", snapshot.val());
            const data = snapshot.val();
            let projectList = [];
            let projectKeysList = Object.keys(data.projects);
            debugger
            projectKeysList.forEach(key => {
                projectList.push(data.projects[key]);
            });
            if (this._isMounted && projectList.length) {
                this.setState({
                    ...this.state,
                    projectList: projectList
                })
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
        this.getProjectsRef.off();

    }
    render() {
        const { classes } = this.props
        const { projectList, taskForm, open } = this.state
        return (
            <div className={classes.root}>
                <Formik
                    initialValues={{
                        ...taskForm
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.taskName) {
                            errors.taskName = 'Required';
                        }
                        // if (!values.project) {
                        //     errors.project = 'Required';
                        // }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            let id = Date.now();
                            let task = {
                                id: id,
                                ...values
                            }
                            let taskRef = database.ref('/').child('tasks');

                            taskRef.push({
                                ...task
                            })
                            resetForm({});
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
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
                                <Grid spacing={1}
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={8}>
                                        <InputField type="text" id="taskName"
                                            name="taskName"
                                            value={values.taskName}
                                            handleChange={handleChange}
                                            onBlur={handleBlur} />
                                    </Grid>
                                    <Grid item xs container justify="flex-end">
                                        {projectList?.length ? (<AutoCompleteInput options={projectList} setValue={setFieldValue} fieldName="project" fieldValue={values.project} handleChange={this.handleOnAutoCompleteChange.bind(this)} />) :
                                            (<Button color="primary" type="button" startIcon={<AddCircleOutlineIcon />} onClick={() => this.handleClickOpen(this.state)}>
                                                Project
                                            </Button>)}
                                    </Grid>
                                </Grid>
                                <hr className="mt-2" />
                                <Grid container spacing={1}
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center">
                                    <Grid item xs={3}>
                                        <DatePicker fieldName="taskDate" dateValue={values.taskDate} setValue={setFieldValue} handleDateChange={this.handleOnChange} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TimePicker fieldName="startTime" dateValue={values.startTime} setValue={setFieldValue} handleDateChange={this.handleOnChange} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <TimePicker fieldName="endTime" dateValue={values.endTime} setValue={setFieldValue} handleDateChange={this.handleOnChange} />
                                    </Grid>
                                    <Grid item xs container justify="center">
                                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                            SUBMIT
                        </Button>

                                    </Grid>
                                </Grid>
                            </form>
                        )}

                </Formik>
                <CreateProjectForm open={open} handleClose={this.handleClose.bind(this)} />
            </div>
        )
    }
}

export default withStyles(styles)(ProjectForm);
