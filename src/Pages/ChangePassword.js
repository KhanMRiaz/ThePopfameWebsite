import React, { useState } from 'react'
import { colors } from '../Constants/Constants'
const { innerHeight, innerWidth } = window

const styles = {
    fullScreenContainer: { display: 'flex', height: innerHeight, alignItems: ' center', flexDirection: "column", paddingTop: 0.18 * innerHeight },
    fullScreenContainerWithoutNav: { display: 'flex', flexDirection: 'column', },
    headingContainer: { color: '#000000', marginTop: 0.05 * innerHeight, fontSize: 0.04 * innerHeight },
    formContainer: { flexDirection: 'column', display: 'flex', alignItems: 'flex-start', marginTop: 0.05 * innerHeight },
    inputFields: { backgroundColor: '#FCF4F4', paddingLeft: 20, paddingRight: 20, width: 0.25 * innerWidth, marginBottom: 0.02 * innerHeight, fontSize: 0.02 * innerHeight, height: 65, borderRadius: 40, border: '1px solid' + colors.primaryColor, outline: 'none' },
    invalidEmail: { fontSize: 0.022 * innerHeight, textDecoration: 'none', marginBottom: 0.04 * innerHeight, alignSelf: 'flex-end', color: 'red' },
    button: { marginBottom: 0.05 * innerHeight, width: 0.25 * innerWidth + 40, height: 65, backgroundColor: colors.primaryColor, borderRadius: 40, color: 'white', fontWeight: 'bold', fontSize: 0.022 * innerHeight, outline: 'none', border: 'none', alignItems: 'center', justifyContent: "center", display: "flex", cursor: 'pointer' },

}
const ResetPassword = () => {
    //axios.post(baseUrl + '/api/user/request_reset_password', payload)
    const [passwordValid, setPasswordValid] = useState(false)
    const [confrimPasswordValid, setConfrimPasswordValid] = useState(false)

    const [password, setPassword] = useState('')

    const [confrimPassword, seConfirmPassword] = useState('')

    const checkPasswordValid = () => {

        if (password.length >= 8) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }

    }
    const checkConfrimPasswordValid = () => {

        if (confrimPassword === password) {
            setConfrimPasswordValid(true)
        } else {
            setConfrimPasswordValid(false)
        }

    }
    return (
        <>
            <div style={styles.fullScreenContainer}>
                <div style={styles.fullScreenContainerWithoutNav}>
                    <div style={styles.headingContainer}>Reset Password</div>
                </div>
                <div style={styles.formContainer}>
                    <input autoComplete={'off'} type="text" value={password} placeholder={'Enter New password'} onChange={(e) => setPassword(e.target.value)} style={styles.inputFields} onBlur={() => checkPasswordValid()} />
                    {passwordValid === false && <div style={styles.invalidEmail}>Password must have 8 characters</div>}
                    <input autoComplete={'off'} type="text" value={confrimPassword} placeholder={'johndoe@gmail.com'} onChange={(e) => seConfirmPassword(e.target.value)} style={styles.inputFields} onBlur={() => checkConfrimPasswordValid()} />
                    {confrimPasswordValid === false && <div style={styles.invalidEmail}>Password must be same</div>}
                </div>
                <div style={styles.button}>
                    Confirm
                </div>
            </div>
        </>
    )
}

export default ResetPassword