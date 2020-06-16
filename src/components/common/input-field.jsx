import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import '../../assets/main.css'

const useStyles = makeStyles(theme => ({
    root: {
        '& > div > input': {
            padding: '14.5px 14px !important'
        }
    }
}))

const InputField = (props) => {

    const classes = useStyles();
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
                className={clsx('min-w-full', classes.root)}
                variant="outlined"
                type={type}
                id={id}
                name={fieldName}
                label={label}
                value={value || ''}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </FormControl>
    )
}

export default InputField