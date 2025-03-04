import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);


    const handleRegister = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const Name = e.target.name.value;
        const password = e.target.password.value;

        // create user
        createUser(email , password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/');

        })
        .catch(error =>{
            console.log('ERROR HERE' , error.message);
        })



    };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">Register Here</h1>
        
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister}  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='ml-2'>Already have an account? Please <Link to='/login'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;