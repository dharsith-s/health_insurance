
import React, { useState } from 'react';
import './Login.css';
import "./SignUpPage";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleSubmit = e => {
      e.preventDefault();
      setEmail('');
      setPassword('');
    };
    const nav = useNavigate();
    const handleLogin=()=>{
     nav("/login")
    }
    
  
    return (
      <div>
        <div className="scrolling-text-container">
      <div className="scrolling-text">
      Putting your health first with reliable insurance
      </div>
    </div>
    <div class="logo">
      <p>"Don't gamble with your health—secure your future with health insurance."</p>
    </div>
    <div class="img">
    <img src="https://www.policybazaar.com/pblife/assets/images/pb_life_How_to_increase_Health_insurance_cover_1592063367.gif" width="600" height="400" alt="img" />
    </div>
    <h2 class="log"><center>GOOD TO SEE YOU AGAIN</center></h2>
    <div class="logininfo">
        <form onSubmit={handleSubmit}>
        
          <div class="email">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div class="pass">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div class="submit">
          <button type="submit" onClick={handleLogin}>Login</button>
          </div>
          <div class="reg1">
            <p>Don't have an account?<Link to="/SignUpPage"><a class="register-link">Sign Up</a></Link></p>
          </div>
         {/* <button onClick={() => navigate('/login')}>Login</button> */}

        </form>
        </div>
     </div>
        
    );
  }
  
  export default LoginPage;
  