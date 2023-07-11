import React, { useState } from 'react';
import "./Login"
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [name, setName ] = useState('');
  const [phoneno, setPhoneNo ] = useState('');
  const [adharNo, setAdharNo ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    setName('');
    setAdharNo('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNo('');

  };
  const nav = useNavigate();
  const handleSignupPage=()=>
  {
    nav("/SignupPage")
  }
  

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div class="box">
        <img src="https://img.freepik.com/free-photo/full-shot-family-members-silhouettes-outdoors_23-2150039658.jpg?size=626&ext=jpg&ga=GA1.2.2109871475.1688912072&semt=ais" alt="health"></img>
        </div>
        <div class="signinfo">
        <h2>Enter your details</h2>
        <div>
        <label>Name:</label>
          <input
            type="string"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>PhoneNumber:</label>
          <input
            type="number"
            value={phoneno}
            onChange={e => setPhoneNo(e.target.value)}
          />
          <label>AdharNo:</label>
          <input
            type="string"
            value={adharNo}
            onChange={e => setAdharNo(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        <div class="reg">
        <p>Have already an account? <a href="LoginPage" class="register-link">Login Here</a></p>
                        </div>
                        </div>
      </form>
    </div>
  );
}
export default SignupPage;