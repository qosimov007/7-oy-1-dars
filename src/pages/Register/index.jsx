import { useState, useRef } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import './index.css'
function Register() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const repasswordRef = useRef('');
  const navigate = useNavigate('');

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



  function handleRegister(){
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
          return el.email == user.email
        })
      }

      if(isExist){
        alert('Bunday email mavjud emas')
        return
      }

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      navigate('/login')


    }
  }


  return (
    <>
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h3 className="register-title">Sign up</h3>

          <form className="register-form">
            <input ref={emailRef} type="email" name="" id="" placeholder="Email" />
            <input ref={passwordRef} type="password" name="" id="" placeholder="Password" />
            <input ref={repasswordRef} type="password" name="" id="" placeholder="Re Password" />
            <button onClick={handleRegister}>Create an acount</button>
            <p  >Lorem ipsum dolor sit amet.<Link to={'/login'} className='rederect-login'>Login</Link></p>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register