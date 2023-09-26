import Signin from './components/SigninRoute';
import SuccessRoute from './components/SuccessRoute';
import OtpRoute from './components/OtpRoute';
import './App.css';
import { useState } from 'react';

function App() {
  const [sendOtp, setSendOtp] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otpValue, setOtpValue] = useState("")
  const [success, setSuccess] = useState(false)
  function generateOTP() {
    const randomNum = Math.floor(Math.random() * 10000);
    const otp = String(randomNum).padStart(4, '0');
    setOtpValue(otp)
    setSendOtp(true)
  }

  return (
    <div className="App">

      {(!sendOtp && !success) && (<Signin phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} generateOTP={generateOTP} />)}
      {success && (
        <SuccessRoute />
      )}

      {sendOtp && (
        <OtpRoute phoneNumber={phoneNumber} otpValue={otpValue} setSuccess={setSuccess} sendOtp={sendOtp} setSendOtp={setSendOtp}/>
      )}

    </div>
  );
}

export default App;
