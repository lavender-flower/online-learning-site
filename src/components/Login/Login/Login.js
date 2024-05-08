import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    return (
        <div className='text-center mt-5'>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-warning mb-5'>Google Sign in</button>
        </div>
    );
};

export default Login;