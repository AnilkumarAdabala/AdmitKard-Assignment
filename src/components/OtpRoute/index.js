import React, { useEffect, useState } from "react";
import { Component } from "react";
import "./index.css";
import signal from "./OtpImage/Cellular Connection.svg"
import wifi from "./OtpImage/Wifi.svg"
import battery from "./OtpImage/Battery.svg"
import confirmPic from "./OtpImage/undraw_confirmed_81ex.svg"



const OtpRoute = (props) => {
    const {phoneNumber,otpValue,setSuccess,sendOtp,setSendOtp} = props
    const [pageTrue,setPageTrue] = useState(false)
    const [enteredOtp,setEnteredOtp] = useState({
        firstValue:"",
        secondValue:"",
        thirdValue:"",
        fourthValue:""
    })
    useEffect(() => {
     setPageTrue(true)
    },[])
    useEffect(() => {
      if(pageTrue){
        alert(otpValue)
      }
      
    },[pageTrue])
    const verifyOtp = () => {
        let finaltop = enteredOtp["firstValue"] + enteredOtp["secondValue"] + enteredOtp["thirdValue"] + enteredOtp["fourthValue"]
        if(finaltop === otpValue){
        console.log('entered',finaltop)
          setSuccess(true)
          console.log(sendOtp)
          setSendOtp(false)
        }
    }
    return(
        <div className="otp-bg-main-container">
            <div className="otp-bg-container">
            <div className="status-bar">
                <p className="time">9:41</p>
                <div className="icons-container">
                    <img src = {signal} />
                    <img src = {wifi} />
                    <img src = {battery} className="battery" />
                </div>
            </div>
            <img src = {confirmPic} className="confirm-pic" />
            <p className="verify-number">Please verify Mobile number</p>
            <div >
                <p className="otp-description">{`An OTP is sent to +91${phoneNumber}`}</p>
                <p className="change-number">Change Phone Number</p>
            </div>
            <div className="input-containers">
                <input type = "text" className="input-num first" onChange={(e) => {
                    setEnteredOtp({...enteredOtp,firstValue:e.target.value})
                }}/>
                <input type = "text" className="input-num" onChange={(e) => {
                    setEnteredOtp({...enteredOtp,secondValue:e.target.value})
                }}/>
                <input type = "text" className="input-num" onChange={(e) => {
                    setEnteredOtp({...enteredOtp,thirdValue:e.target.value})
                }}/>
                <input type = "text" className="input-num" onChange={(e) => {
                    setEnteredOtp({...enteredOtp,fourthValue:e.target.value})
                }}/> 
            </div>
            <div className="resend-container">
                <p className="bottom-description">Didn’t receive the code?</p>
                <p className="resend">Resend</p>
            </div>
            <div className="otp-btn-container">
                <button className="verify-btn" onClick={verifyOtp}>Verify</button>
            </div>
            </div>
        </div>
    )
}

export default OtpRoute