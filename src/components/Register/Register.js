import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register now</h2>
            <form>
                <input type="text" placeholder='Your name' />
                <br/>
                <input type="email" placeholder='Enter your email' />
                <br/>
                <input type="password" name="" id="" placeholder='password' />
                <br/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;