import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import gIcon from "../assets/images/icon-google.svg"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

const Login = ({ doGoogleLogin }) => {
    const classes = useStyles();
    return (
        <div className="w-full h-full flex flex-center align-middle flex-column justify-around mt-56">
            <Button variant="contained" onClick={doGoogleLogin}>
                <Avatar alt="google Icon" src={gIcon} className={(classes.small, 'mr-2')} />
                Login with Google
            </Button>
        </div>
    )
}

export default Login;