import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { colors } from '../Constants/Constants'
import { baseURL } from '../Redux/Actions/serviceAction'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import './SignUp.css'


const { innerHeight, innerWidth } = window
const styles = {
    button: { backgroundColor: colors.primaryColor},

}
const SignUp = () => {
    const [emailValid, setEmailValid] = useState()
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const naviagte = useNavigate()
    const checkEmailValid = () => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailValid(true)
        } else {
            if (email === '') {
                setEmailValid(true)
            } else {
                setEmailValid(false)
            }
        }

    }
    const Label = () => {
        return (
            <div className='SignUp-Label-div'>
                <div className='SignUp-Label'>I agree with <div className='SignUp-Label-left' style={{ paddingLeft: 5, color: colors.primaryColor}}>terms</div> <div style={{ paddingLeft: 5 }}>and </div><div  className='SignUp-Label-left' style={{paddingLeft: 5, color: colors.primaryColor}}>condition</div></div>
            </div>
        )
    }
    return (
        <>
            <div className='SignUp-fullScreenContainer'>
                <div className='SignUp-fullScreenContainerWithoutNav' >
                    <div className='SignUp-headingContainer' >User Sign Up</div>
                </div>
                <div className='signUp-container'>
                    <div className='signUp-formContainer' >
                        <div className='signUp-inputLabel' >First Name</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={firstName} placeholder={'John'} onChange={(e) => setFirstName(e.target.value)}  />
                    </div>
                    <div className='signUp-formContainer' >
                        <div className='signUp-inputLabel' >Last Name</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={lastName} placeholder={'Doe'} onChange={(e) => setLastName(e.target.value)}  />
                    </div>
                </div>


                <div className='signUp-container'>
                    <div className='signUp-formContainer'>
                        <div className='signUp-inputLabel'>Number</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={phoneNumber} placeholder={'US +1 9878976546'} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className='signUp-formContainer'>
                        <div className='signUp-inputLabel'>Email</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} onBlur={() => checkEmailValid()} />
                        {emailValid === false && <div className='SignUp-emailValid'>Email is invalid</div>}
                    </div>
                </div>

                <div className='signUp-container'>
                    <div className='signUp-formContainer'>
                        <div className='signUp-inputLabel'>Password</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={password} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)}  onBlur={() => checkEmailValid()} />
                    </div>
                    <div className='signUp-formContainer'>
                        <div className='signUp-inputLabel'>Confirm Password</div>
                        <input className='signUp-inputField' autoComplete={'off'} type="text" value={confirmPassword} placeholder={'Confirm Password'} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={() => checkEmailValid()} />
                        {emailValid === false && <div className='SignUp-emailValid'>password is invalid</div>}
                    </div>
                </div>
                <FormGroup className='SignUp-formGroup'>
                    <FormControlLabel className='SignUp-FormControlLabel' control={<Checkbox defaultChecked sx={{

                        color: colors.primaryColor,
                        '&.Mui-checked': {
                            color: colors.primaryColor,
                        },
                    }} />} label={<Label />} />
                </FormGroup>
                <div className='login-btn'>
                    Sign Up
                </div>
                <div className='signUp-login-section'>Already a user? <Link className='signUp-login-section-link' to={'/login'} style={{ color: colors.primaryColor}}> {'Login'} </Link></div>
            </div>
        </>
    )
}

export default SignUp