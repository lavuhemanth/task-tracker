import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import '../../assets/main.css';

const styles = {
    root: {
        '& > div > input': {
            padding: '14.5px 14px !important'
        }
    }
}
class TimePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    handleDateOnChange(props, e) {
        props.handleDateChange(props, e)
    }
    render() {
        const { fieldName, dateValue } = this.props
        return (<MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                className={this.props.classes.root}
                margin="normal"
                variant="inline"
                inputVariant="outlined"
                id="time-picker"
                label="Time picker"
                name={fieldName}
                value={dateValue || new Date().toISOString}
                onChange={(e) => this.handleDateOnChange(this.props, e)}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>);
    }
}

export default withStyles(styles)(TimePicker);