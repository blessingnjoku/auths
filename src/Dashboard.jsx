import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

const Dashboard=()=>{
    const user =JSON.parse(localStorage.getItem('user'));

    return(
<div className='conatiner'>
<h1>Welcome to your Dashboard</h1>
<p>this page is only accessible by you when login</p>
<p>This is your email: <b>{user.email}</b></p>

<button ><Link to='/logout'>Logout</Link></button>
</div>
    )
}
export default Dashboard