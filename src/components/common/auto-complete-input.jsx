import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';


// const filter = createFilterOptions();

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
            ...props
        }
    }

    render() {
        const { options, fieldName, handleChange, value, classes } = this.props
        return (
            <Autocomplete
                id="combo-box-demo"
                className={classes.root}
                options={options}
                name={fieldName}
                onChange={handleChange}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                value={value}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
            />
        );
    }
}

export default withStyles(styles)(AutoCompleteInput);