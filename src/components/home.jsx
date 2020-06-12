import React, { Component } from 'react';
import Project from './project';

import Container from '@material-ui/core/Container';

class Home extends Component {

    render() {
        return (
            <Container fixed>
                <Project></Project>
            </Container>
        )
    }
}

export default Home