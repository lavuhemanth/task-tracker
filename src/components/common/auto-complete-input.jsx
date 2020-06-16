import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    root: {
        '& > div > div > input': {
            padding: '7.5px 8px !important'
        }
    }
}

class AutoCompleteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,

        }
    }

    handleOnChange(e) {
        this.props.handleChange(this.props, e);
    }

    render() {
        const { options, fieldName, fieldValue, classes } = this.props
        return (
            <Autocomplete
                id="combo-box-demo"
                className={classes.root}
                options={options}
                name={fieldName}
                onChange={(e) => this.handleOnChange(e)}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                value={fieldValue}
                getOptionLabel={option => typeof option === 'string' ? option : option.title}
                style={{ width: 300 }}
                renderInput={(params) =>
                    <TextField {...params} variant="outlined" />}
            />
        );
    }
}

export default withStyles(styles)(AutoCompleteInput);