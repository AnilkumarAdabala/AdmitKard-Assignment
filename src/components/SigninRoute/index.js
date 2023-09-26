import React from "react";
import { Component } from "react";
import "./index.css"
import logo from "./Images/logo.svg"

import flag from "./Images/image 1.svg"

class Signin extends Component{
    render(){
        const {phoneNumber,generateOTP,setPhoneNumber} = this.props

        const phoneNumberSaving = (e) => {
           setPhoneNumber(e.target.value)
        }
        return (
            <div className="container">
                <div className = "logo">
                    <img src ={logo} alt = "logo" />
                </div>
                <div className = "greet-container">
                    <h1 className="greet-heading">Welcome Back</h1>
                    <p className="greet-description">Please sign in to your account</p>
                </div>
                <div className="contact-number-container">
                    {/* <div><label>Enter Your number</label></div> */}
                    <div className="number-container">
                        <img src ={flag} />
                        <select className="drop-down">
                            <option>+91</option>
                            <option>+91</option>
                            <option>+91</option>
                            <option>+91</option>
                            <option>+91</option>
                        </select>
                        <input  type = "text" className="input" placeholder="Enter your number" onChange={phoneNumberSaving}/>
                    </div>
                    
                </div>
                <p className="end-description">We will send you a one time SMS message.<br/>
                    Charges may apply.</p>
                <div className="btn-conatiner">
                    <button className="sign-in-btn" onClick={() => {
                        generateOTP()
                    }}>Sign in with Otp</button>
                </div>
            </div>
        )
    }
}

export default Signin