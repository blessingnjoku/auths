import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'

const Login=()=>{
    const [UserInfo, setUserInfor]= useState({email:'', password:''})
    const [loggedin, setLoggedin] = useState(false)

let navigate = useNavigate();
const handleUserData=(e)=>{
    const {name, value}=e.target;
    setUserInfor((prevState)=>({...prevState, [name]: value}))
}

useEffect(()=>{
    const user =JSON.parse(localStorage.getItem('user'));
    if(user){
        setLoggedin(true);
    }

});

const HandleForm=(e)=>{
    e.preventDefault();
    if(UserInfo.email!= " " && UserInfo.password != ""){
        // submit
        localStorage.setItem('user', JSON.stringify(UserInfo));
        setLoggedin(true)


    }else{
        alert('input cant be empty')
    }
}
return loggedin?(
    // <Navigate to='/dashboard'/>
      navigate('/dashboard')
    ):(
<div className='form-wrapper'>
<h1>Login</h1>
<form onSubmit={HandleForm}>
    <div>
        <label>Email</label>
        <input type='email' placeholder='enter email' name='email' value={UserInfo.email} onChange={handleUserData} required/>

    </div>
    <div>
        <label>Password</label>
        <input type='password' placeholder='enter password'  name='password' value={UserInfo.password} onChange={handleUserData} required/>
        
    </div>
    <button>Submit</button>
</form>
</div>
    )
}
export default Login