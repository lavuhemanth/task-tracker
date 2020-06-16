import React, { Component } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import '../../assets/main.css';

const styles = {
    root: {
        '& > div > input': {
            padding: '14.5px 14px !important'
        }
    }
}

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
        const { dateValue, fieldName, classes } = this.props
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    className={classes.root}
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="dd/MM/yyyy"
                    variant="inline"
                    inputVariant="outlined"
                    name={fieldName}
                    value={dateValue || ''}
                    onChange={(e) => this.handleDateOnChange(this.props, e)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }
}

export default withStyles(styles)(DatePicker);