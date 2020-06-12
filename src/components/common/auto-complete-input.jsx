import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';


const filter = createFilterOptions();

class AutoCompleteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    render() {
        const { options, fieldName, handleChange, value } = this.props
        return (
            <Autocomplete
                id="combo-box-demo"
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

export default AutoCompleteInput;