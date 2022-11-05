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
const { innerHeight, innerWidth } = window
const styles = {
    fullScreenContainer: { display: 'flex', alignItems: ' center', flexDirection: "column", paddingTop: 0.11 * innerHeight },
    fullScreenContainerWithoutNav: { display: 'flex', flexDirection: 'column', },
    headingContainer: { color: '#000000',fontSize: 0.04 * innerHeight , padding:50 },
    formContainer: { flexDirection: 'column', display: 'flex', alignItems: 'flex-start', marginTop: 15 },
    inputFields: { backgroundColor: '#FCF4F4', paddingLeft: 20, paddingRight: 20, width: 0.2 * innerWidth, marginBottom: 0.02 * innerHeight, fontSize: 0.02 * innerHeight, height: 65, borderRadius: 40, border: '1px solid' + colors.primaryColor, outline: 'none', marginRight: 15, marginLeft: 15 },
    invalidEmail: { fontSize: 0.022 * innerHeight, textDecoration: 'none', marginBottom: 0.04 * innerHeight, alignSelf: 'flex-end', color: 'red' },
    button: { marginBottom: 0.02 * innerHeight, width: 0.25 * innerWidth + 40, height: 65, backgroundColor: colors.primaryColor, borderRadius: 40, color: 'white', fontWeight: 'bold', fontSize: 0.022 * innerHeight, outline: 'none', border: 'none', alignItems: 'center', justifyContent: "center", display: "flex", cursor: 'pointer', marginTop: 30 },
    inputLabel: { marginLeft: 0.01 * innerWidth, fontSize: 0.022 * innerHeight, color: 'black', paddingBottom: 5, paddingLeft: 15 },

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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: "flex" }}>I agree with <div style={{ color: colors.primaryColor, paddingLeft: 5 }}>terms</div> <div style={{ paddingLeft: 5 }}>and </div><div style={{ color: colors.primaryColor, paddingLeft: 5 }}>condition</div></div>
            </div>
        )
    }
    return (
        <>
            <div style={styles.fullScreenContainer}>
                <div style={styles.fullScreenContainerWithoutNav}>
                    <div style={styles.headingContainer}>User Sign Up</div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>First Name</div>
                        <input autoComplete={'off'} type="text" value={firstName} placeholder={'John'} onChange={(e) => setFirstName(e.target.value)} style={styles.inputFields} />
                    </div>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>Last Name</div>
                        <input autoComplete={'off'} type="text" value={lastName} placeholder={'Doe'} onChange={(e) => setLastName(e.target.value)} style={styles.inputFields} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>Number</div>
                        <input autoComplete={'off'} type="text" value={phoneNumber} placeholder={'US +1 9878976546'} onChange={(e) => setPhoneNumber(e.target.value)} style={styles.inputFields} />
                    </div>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>Email</div>
                        <input autoComplete={'off'} type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} style={styles.inputFields} onBlur={() => checkEmailValid()} />
                        {emailValid === false && <div style={styles.invalidEmail}>Email is invalid</div>}
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>Password</div>
                        <input autoComplete={'off'} type="text" value={password} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} style={styles.inputFields} onBlur={() => checkEmailValid()} />
                    </div>
                    <div style={styles.formContainer}>
                        <div style={styles.inputLabel}>Confirm Password</div>
                        <input autoComplete={'off'} type="text" value={confirmPassword} placeholder={'Confirm Password'} onChange={(e) => setConfirmPassword(e.target.value)} style={styles.inputFields} onBlur={() => checkEmailValid()} />
                        {emailValid === false && <div style={styles.invalidEmail}>Email is invalid</div>}
                    </div>
                </div>
                <FormGroup style={{ width: '100%', display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <FormControlLabel style={{ display: "flex" }} control={<Checkbox defaultChecked sx={{

                        color: colors.primaryColor,
                        '&.Mui-checked': {
                            color: colors.primaryColor,
                        },
                    }} />} label={<Label />} />
                </FormGroup>
                <div style={styles.button}>
                    Sign Up
                </div>
                <div style={{ marginTop: 10, alignSelf: 'center', flexDirection: 'row', display: 'flex', fontSize: 0.022 * innerHeight }}>Already a user? <Link to={'/login'} style={{ color: colors.primaryColor, textDecoration: 'underline', paddingLeft: 8, paddingRight: 8, textDecorationColor: colors.primaryColor, fontWeight: '500' }}> {'Login'} </Link></div>
            </div>
        </>
    )
}

export default SignUp