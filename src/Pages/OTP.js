import React, { useState } from 'react'
import { useLocation } from 'react-router'
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
const OTP = () => {
    const [otpValid, setOTPValid] = useState()
    const [otp, setOtp] = useState()
    const location = useLocation
    console.log("======OTPParams",location.state)
    const checkOtpValid = () => {

        if (otp.length === 6) {
            setOTPValid(true)
        } else {
            setOTPValid(false)
        }

    }
    return (
        <>
            <div style={styles.fullScreenContainer}>
                <div style={styles.fullScreenContainerWithoutNav}>
                    <div style={styles.headingContainer}>One Time Passcode</div>
                </div>
                <div style={styles.formContainer}>
                    <input autoComplete={'off'} type="text" value={otp} placeholder={'Enter 6-Digit One Time Passcode Sent to your email'} onChange={(e) => setOtp(e.target.value)} style={styles.inputFields} onBlur={() => checkOtpValid()} />
                    {otpValid === false && <div style={styles.invalidEmail}>OTP is invalid</div>}
                </div>
                <div style={styles.button}>
                    Submit
                </div>
            </div>
        </>
    )
}

export default OTP