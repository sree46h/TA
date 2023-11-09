import react,{useState} from 'react'
import { Input,Button,Dropdown } from 'semantic-ui-react'

import 'react-dropdown/style.css';
const Register=()=>{
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
    return(
        <div className='login-page-parent-container'>
                <div className='login_page_container'> 
                <Dropdown options={users} value={userType} placeholder={"select user"} selection/>
                <Input  placeholder='Enter ID/Email' className='input_button_styles'/>
                <Input  placeholder='Enter Password' className='input_button_styles'/>
                <Button type='submit' className='red_button' >Sign-Up</Button>
                </div>
            </div>
    )
}

export default Register