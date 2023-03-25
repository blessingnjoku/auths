
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './compenent/Footer';
import Main from './compenent/Main';
import Navbar from './compenent/Navbar';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';



function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
   
      <Routes>
     

    
       <Route path='/' element={<Main><Home/></Main>}/>
       <Route path='/dashboard' element={<Main><Dashboard/></Main>}/>
       <Route path='/login' element={<Main><Login/></Main>}/>
       <Route path='/logout' element={<Main><Logout/></Main>}/>





      </Routes>

 
    </BrowserRouter>
   
  
    </div>
  )
}

export default App;
