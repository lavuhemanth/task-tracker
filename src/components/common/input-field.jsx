import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import '../../assets/main.css'

const InputField = (props) => {

    const { type,
        id,
        fieldName,
        label,
        value,
        handleChange,
        handleBlur } = props;
    return (
        <FormControl fullWidth >

            <TextField
                className="min-w-full"
                variant="outlined"
                type={type}
                id={id}
                name={fieldName}
                label={label}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </FormControl>
    )
}

export default InputField