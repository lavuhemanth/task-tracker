import React, { Component } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';




class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    handleDateOnChange(props, e) {
        props.handleDateChange(props, new Date(e).toISOString())
    }

    render() {
        const { dateValue, fieldName } = this.props
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="dd/MM/yyyy"
                    variant="inline"
                    inputVariant="outlined"
                    name={fieldName}
                    value={dateValue}
                    onChange={(e) => this.handleDateOnChange(this.props, e)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }
}

export default DatePicker;