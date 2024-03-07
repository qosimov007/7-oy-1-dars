import { useState, useRef } from 'react'
import { Link, json } from 'react-router-dom'
import './index.css'
function Register() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useRef('');

  function validate(){
    return true;
  }


function getData(){
  let users = [];

  if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'))
  }

  return users;
}



  function handleLogin(){
    const isValid =validate();
    if(isValid){
     const user = {
      email: emailRef?.current?.value,
      password: password?.current?.value,
      repassword: repasswordRef?.current?.value,
     
     }


     let users =getData();
      let isExist = false;
      if(users.lenght){
        isExist = users.some(el => {
          return el.email == user.email && el.password == user.password
        })
      }

     if(isExist){
      localStorage.setItem('token', users.email);
      navigate('/')
      console.log("Navigater ishlamadi");
     }
     else{
      alert('Parol yoki email no togri')
     }


    }
  }


  return (
    <>
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h3 className="register-title">Login</h3>

          <form className="register-form">
            <input ref={emailRef} type="email" name="" id="" placeholder="Email" />
            <input ref={passwordRef} type="password" name="" id="" placeholder="Password" />
            <button onClick={handleLogin}>Login to your acount</button>
            <p  >Lorem ipsum dolor sit amet.<Link to={'/register'} className='rederect-login'>Register</Link></p>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register