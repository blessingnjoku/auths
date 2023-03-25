import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar=()=>{
    const user =JSON.parse(localStorage.getItem('user'));
    return(
<div className='navbar'>
<div className='container'>
<h3>Auth App</h3>
    <ul>
        <li><Link to='/'>Home</Link></li>
        {
            user? (
                
                <li><Link to='/dashboard'>Dashboard</Link></li>
                
                

            ):(
        
            <li><Link to='/login'>Login</Link></li>

            

            )
          
        }
     
     


    </ul>
</div>

</div>
    )
}
export default Navbar