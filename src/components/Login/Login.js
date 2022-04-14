import React from 'react';
import useFirebase from '../../hooks/firebase';

const Login = () => {
    const {signInWithGoogle} =useFirebase();
    return (
        <div>
           <h3>Please Login</h3> 
           <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google sign in</button>
           </div>
            <form>
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;