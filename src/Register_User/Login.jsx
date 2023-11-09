import react, { useState } from 'react';
import { Input,Button,Dropdown, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const history = useNavigate();
    let users=[
        {
            key:'TA Applicant',
            text:'TA Applicant',
            value:'TA Applicant'
        },
        {
            key:'Administrator',
            text:'Administrator',
            value:'Administrator'
        },
        {
            key:'TA Committee',
            text:'TA Committee',
            value:'TA Committee'
        },
        {
            key:'Instructor',
            text:'Instructor',
            value:'Instructor'
        }
    ]
    const [userType,setUserType] = useState('TA Applicant')
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const LognHandler=()=>{
        if(email && password){
            if(userType==="TA Applicant"){
                history(`/dashboard?user=${userType}`)
            }
        }
        else{
            alert("Empty password/username")
        }
    }
    return(
            <div className='login-page-parent-container'>
                
                <div className='login_page_container'>
                
                <Dropdown options={users} value={userType} placeholder={"select user"} selection/>
                <Input value={email} placeholder='Enter ID/Email' className='input_button_styles' onChange={(e)=>setEmail(e.target.value)}/>
                <Input  value={password} placeholder='Enter Password' className='input_button_styles' onChange={(e)=>setPassword(e.target.value)}/>
                <Button type='submit' className='red_button' onClick={LognHandler}>Submit</Button>
                </div>
            </div>
    )
}

export default Login;