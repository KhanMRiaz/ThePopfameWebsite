import axios from 'axios'
import React, { useState } from 'react'
import { withAlert } from 'react-alert'
import { BallTriangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router'
import { colors } from '../Constants/Constants'
import { baseURL } from '../Redux/Actions/serviceAction'
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
    const [emailValid, setEmailValid] = useState()
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
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
    const handleResetPassword = async () =>  {
        let data = {
            email:email,
            step:1
        }
        console.log("=======Data",data)
        try {
            setLoading(true)
            const res = await axios.post(baseURL + '/api/user/request_reset_password' , data)
            // naviagte('/otp',{state:email})
            console.log("response",res)
            setLoading(false)

        }catch(e){
            setLoading(false)

            console.log("=====er",e)

        }
    }
    return (
        <>
            <div style={styles.fullScreenContainer}>
                <div style={styles.fullScreenContainerWithoutNav}>
                    <div style={styles.headingContainer}>Enter Your Email To Reset Password</div>
                </div>
                <div  style={styles.formContainer}>
                    <input autoComplete={'off'} type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} style={styles.inputFields} onBlur={() => checkEmailValid()} />
                    {emailValid === false && <div style={styles.invalidEmail}>Email is invalid</div>}
                </div>
                <div onClick={()=>handleResetPassword()} style={styles.button}>
                    Send
                </div>
                {loading &&
						<div style={{ width: 0.25 * innerWidth, display: "flex", alignItems: "center", marginBottom: 20, justifyContent: "center", marginLeft: 20 }} >
							<BallTriangle
								height={50}
								width={50}
								radius={5}
								color={colors.primaryColor}
								ariaLabel="ball-triangle-loading"
							/>
						</div>}
            </div>
        </>
    )
}

export default withAlert() (ResetPassword)