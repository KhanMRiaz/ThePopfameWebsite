import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../Redux/Actions/loginAction';
import { colors } from '../Constants/Constants'
import EyeOff from '../Assets/Services/EyeOff.png'

const { innerHeight, innerWidth } = window
const styles = {
    fullScreenContainer: { display: 'flex', height: innerHeight, alignItems: 'flex-end', justifyContent: 'center' },
    fullScreenContainerWithoutNav: { display: 'flex', flexDirection: 'column', height: 0.9 * innerHeight, width: 0.25 * innerWidth, alignItems: 'center', justifyContent: 'flex-start' },
    headingContainer: { color: colors.primaryColor, marginTop: 0.05 * innerHeight, display: 'flex', fontSize: 0.04 * innerHeight },
    formContainer: { flexDirection: 'column', display: 'flex', alignItems: 'flex-start', marginTop: 0.05 * innerHeight },
    inputFields: { backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, width: 0.25 * innerWidth, marginBottom: 0.02 * innerHeight, fontSize: 0.02 * innerHeight, height: 65, borderRadius: 40, border: '1px solid' + colors.primaryColor, outline: 'none' },
    inputLabel: { marginLeft: 0.01 * innerWidth, marginBottom: 0.01 * innerHeight, fontSize: 0.022 * innerHeight, color: colors.primaryColor },
    button: { marginBottom: 0.05 * innerHeight, width: 0.25 * innerWidth + 40, height: 65, backgroundColor: colors.primaryColor, borderRadius: 40, color: 'white', fontWeight: 'bold', fontSize: 0.022 * innerHeight, outline: 'none', border: 'none' },
    forgot: { fontSize: 0.022 * innerHeight, textDecoration: 'underline', marginBottom: 0.04 * innerHeight, alignSelf: 'flex-end', color: colors.primaryColor }
}

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordHideToggle, setPasswordHideToggle] = useState(false)
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log({ user })
    }, [])
    const handleSubmit = () => {
        const credentais = {
            email: email,
            password: password,
            fcm_token: '',
            enum: 'Client'
        }
        dispatch(login(credentais));
    }

    const register = ' register '
    return (
        <div style={styles.fullScreenContainer}>
            <div style={styles.fullScreenContainerWithoutNav}>
                <div style={styles.headingContainer}>Log In</div>
                <form onSubmit={handleSubmit} style={styles.formContainer}>
                    <div style={styles.inputLabel}>Name:</div>
                    <input autoComplete='off' type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} style={styles.inputFields} />
                    <div style={styles.inputLabel}>Password:</div>
                    <div>
                        <div onClick={()=>setPasswordHideToggle(!passwordHideToggle)} style={{ position: 'absolute', left: 0.22 * innerWidth, right: 0, marginTop: 23, }}>
                            <img src={EyeOff} width={25} height={25} />
                        </div>
                        <input autoComplete='off' type={passwordHideToggle ? 'text' : 'password'} value={password} onChange={(password) => setPassword(password.target.value)} style={styles.inputFields} />
                    </div>
                    <div style={styles.forgot}>Forgot Password?</div>
                    <input type="submit" value="Log In" style={styles.button} />
                    <div style={{ alignSelf: 'center', flexDirection: 'row', display: 'flex' }}>
                        <div style={{ width: 0.07 * innerWidth, borderBottom: '1px solid ' + colors.primaryColor }} />
                        <div style={{ transform: 'translateY(50%)', fontSize: 0.022 * innerHeight, color: colors.primaryColor, marginRight: 0.015 * innerWidth, marginLeft: 0.015 * innerWidth }}>OR</div>
                        <div style={{ width: 0.07 * innerWidth, borderBottom: '1px solid ' + colors.primaryColor }} />
                    </div>
                    <div style={{ marginTop: 0.06 * innerHeight, alignSelf: 'center', flexDirection: 'row', display: 'flex', fontSize: 0.022 * innerHeight }}>Not a User <div style={{ color: colors.primaryColor, textDecoration: 'underline', paddingLeft: 8, paddingRight: 8, textDecorationColor: colors.primaryColor, fontWeight: '500' }}> {'Register'} </div> From Email</div>
                </form>
            </div>
        </div>
    )
}

export default Login
