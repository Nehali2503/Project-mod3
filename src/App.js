import React from 'react';
//import { authentication } from './Firebase-config';
//import OtpPage from './Components/Pages/OtpPage'
import { Route,Routes} from "react-router-dom";
 
import LoginPage from './Components/LoginPage'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import './App.css';
import CaseTable from './Components/CaseTable';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' exact element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
      
    </>
  );
}
export default App;
