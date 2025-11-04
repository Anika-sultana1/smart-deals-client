import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router';

const Register = () => {

    const {setUser,  updateUserProfile, signInWithGoogle,createUser }= use(AuthContext)

const navigate = useNavigate();


    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result => {
            console.log(result)

            const newUser = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL
            }

            // create user in the database 
            fetch('http://localhost:3000/users',{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('after post',data)
                alert('succesfully registered')
                  navigate(location?.pathname || '/')
            })
         

        })
        .catch(error => {
            console.log(error)
        })
    }

const handleSubmit = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photoUrl, email, password)
createUser( email , password)
.then(result=>{
  console.log(result.user)
const user = result.user
  updateUserProfile( {displayName:name, photoURL: photoUrl})
  .then( ()=>{
    setUser({...user, displayName:name, photoURL:photoUrl})
  
  
  const newUser = {
  name: result.user.displayName,
  email: result.user.email,
  image: result.user.photoURL
}

fetch('http://localhost:3000/users', {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newUser)
})
.then(res => res.json())
.then(data => {
  console.log('after register with email and password', data)
})


  alert('succesfully registered')
  navigate('/')
})
  
  
  })
  .catch(error=> {
    console.log(error)
  })


.catch(error => {
  console.log(error)
})

}


    return (
    <div className="hero bg-base-200">
  <div className=" flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold my-5">Register now!</h1>
    
    </div>
    <div className=" bg-base-100 shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
            {/* name  */}
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          {/* photo url */}
          <label className="label">PhotoUrl</label>
          <input type="text" className="input" name='photoUrl' placeholder="PhotoUrl" />
          {/* email  */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Create a Account</button>
        </fieldset>
        <p>Already have an account? please <Link className='text-green-500 underline' to='/login'>Login</Link></p>
        </form>
         <div className="divider">OR</div>
        {/* Google */}
<button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;