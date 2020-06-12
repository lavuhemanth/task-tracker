import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers';

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
                margin="normal"
                variant="inline"
                inputVariant="outlined"
                id="time-picker"
                label="Time picker"
                name={fieldName}
                value={dateValue}
                onChange={(e) => this.handleDateOnChange(this.props, e)}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>);
    }
}

export default TimePicker;