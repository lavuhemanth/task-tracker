import React from 'react';
import Button from '@material-ui/core/Button';


const Login = ({ doGoogleLogin }) => {
    return (
        <div className="w-full h-full flex flex-center align-middle flex-column justify-around mt-56">
            <Button variant="contained" onClick={doGoogleLogin}><img alt="Google Icon" src="../assets/images/gIcon.png" /> Login with Google</Button>
        </div>
    )
}

export default Login;