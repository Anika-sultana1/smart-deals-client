import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router';

const Login = () => {

  const { signInUser } = use(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        navigate( '/')
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-5">Login</h1>

        </div>
        <div className="card bg-base-100 shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p>New to our website? Please <Link className='text-green-500 underline' to='/register'>Register</Link> before Login</p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;