import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <form onSubmit={handleSignUp} >
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' placeholder="enter name" required />
            </div>
            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' placeholder="enter email" required />
            </div>

            <div className="mb-3 w-50 mx-auto">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' placeholder="enter password" required />
            </div>
            <div className="mb-3 w-50 mx-auto">
                <button className='btn' type="submit">Sign Up</button>
            </div>
            <p className='text-center'>Already have an account? please <Link to='/login'>Log in</Link> </p>
        </form>
    );
};

export default SignUp;