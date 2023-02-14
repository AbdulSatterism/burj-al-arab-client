import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <form onSubmit={handleSignIn} >
                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' placeholder="enter email" required />
                </div>

                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' placeholder="enter password" required />
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <button className='btn' type="submit">Log In</button>
                </div>
                <p className='text-center'>New user? please <Link to='/signup'>Sign Up</Link> </p>
            </form>
        </div>
    );
};

export default Login;