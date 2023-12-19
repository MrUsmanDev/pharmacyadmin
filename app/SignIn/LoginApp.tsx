"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { useSearchParams } from 'next/navigation'
import { Login } from '@/utils/Login/LoginAPI'
import { setUsers } from '@/redux/features/LoginSlice'
import { useAppDispatch } from '@/redux/hooks'

const LoginApp =  () => {

  const router = useRouter();
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || `/`
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const LoginHandler = async() =>{
    if(Email){
        if(Password){
        const res = await signIn("credentials", {
          Email, 
          Password, 
          redirect: false,
          callbackUrl
        })
        if(res?.error){
          Swal.fire({
              title: 'Failed',
              text: 'Invalid Credentials',
              icon: 'error'
            })
        }else{
          router.push(callbackUrl)
           router.refresh()
        }
        }else{
          Swal.fire({
            title: 'Validation Error',
            text: 'Please enter your password',
            icon: 'error'
          })
        }
    }else{
      Swal.fire({
        title: 'Validation Error',
        text: 'Please enter your Email',
        icon: 'error'
      })
    }
  }
  return (
    <div className="main-wrapper login-body">
   <div className="login-wrapper">
    <div className="container">
      <div className="loginbox">
        <div className="login-left">
          <img className="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
        </div>
        <div className="login-right">
          <div className="login-right-wrap">
            <h1>Login</h1>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Form */}
           
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Email" onChange={e=> setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={LoginHandler}>Login</button>
              </div>
            {/* /Form */}
            <div className="text-center forgotpass"><a href="forgot-password.html">Forgot Password?</a></div>
            <div className="login-or">
              <span className="or-line" />
              <span className="span-or">or</span>
            </div>
            {/* Social Login */}
            <div className="social-login">
              <span>Login with</span>
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
            </div>
            {/* /Social Login 
            <div className="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>*/}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LoginApp