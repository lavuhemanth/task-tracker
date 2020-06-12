import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import ProjectForm from './project-form';

class Project extends Component {
    state = {}
    render() {
        return (<Card className="mt-12 mx-4 p-5" variant="outlined">
            <ProjectForm />
        </Card>
        );
    }
}

export default Project;