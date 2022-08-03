import React,{useState} from 'react'
import styled from "styled-components";
import img from '../Images/image1.png';
import {Link} from 'react-router-dom';
import { Form, Alert } from "react-bootstrap";
import { authentication } from '../firebase-config';
import { signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";


const Layout=styled.div`
width:100%;
height:1500px;
display:flex;
flex-wrap:wrap;
justify-content:center;
background-size:contain;
background-image:url(${img});
text-align:center;
`;

const Title=styled.h1`
margin-top:60px;
font-weight: bold;
font-size:40px;
`;

const Button=styled.button`
background-color: #ea107d;
    width:80%;
    height:40px;
    margin-top:15px;
    border-radius:30px;
    font-weight:bold;
    padding-left:-10px;
`;

/*const Form =styled.form`
margin-top:100px;

`;
*/
const Input=styled.input`
width:80%;
height:2em;
margin-left:50px;
`;

function LoginPage() {
  
  const countryCode = "+91";

  const [phoneNumber,setPhoneNumber] = useState(countryCode);
  const [expandForm,setExpandForm]=useState(false);
  const [OTP,setOTP] = useState('');
  
  const generateRecaptcha =()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        
      }
    }, authentication);
  }

  const verifyOTP = (e)=>{
    let otp = e.target.value;
    setOTP(otp);
    if(otp.length === 6){
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result)=>
      {
        const user = result.user;
        

      }).catch((error)=>{

      });
    }

  }
  

  const requestOTP=(e)=>{
    e.preventDefault();
    if(phoneNumber.length >=12){
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
      .then(confirmationResult =>{
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
      // Error; SMS not sent
      console.log(error);
        });
    }
  }


    return (
    <Layout backgroundImage={img}>
    <div className='formContainer'>
     <Title>Citizen Surveillance</Title>

     <Form onSubmit={requestOTP}>
      
      <div className="mb-3">
<label htmlFor="phoneNumberInput" className="form-label">Phone number</label>
<Input type="tel" className="form-control" id="phoneNumberInput" aria-describedby='emailHelp' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
<div id="phoneNumberHelp" className='form-text'>Please enter your phone number</div>
</div>
{expandForm === true?
<>
<div className="mb-3">
<label htmlFor="otpInput" className="form-label">OTP</label>
<Input type="number" className="form-control" id="otpInput" value={OTP} onChange={verifyOTP}/>
<div id="otpHelp" className='form-text'>Please enter OTP</div>
<Button>Verify Now</Button> <Button onClick={requestOTP}>Resend OTP</Button>
</div>
</>
:
null
}

{expandForm === false?
<Button type="submit" className="btn btn-primary">Request OTP</Button>

  : 
  null
  }
  <h2>OR</h2>
<Link to="/home"><Button>Login As Anonymous</Button></Link>

<div id="recaptcha-container"></div>


     </Form>
</div>
     </Layout>
     
        );
}

export default LoginPage

