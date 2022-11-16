import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login, loginSuccess, logout } from '../Redux/Actions/loginAction';
import { colors } from '../Constants/Constants'
import EyeOff from '../Assets/Services/EyeOff.png'
import { BallTriangle } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { withAlert } from 'react-alert';
import { baseURL } from '../Redux/Actions/serviceAction';
import axios from 'axios';
import './Login.css'

const { innerHeight, innerWidth } = window
const styles = {
	fullScreenContainer: { display: 'flex', height: innerHeight, alignItems: 'flex-end', justifyContent: 'center' },
	fullScreenContainerWithoutNav: { display: 'flex', flexDirection: 'column', height: 0.9 * innerHeight, width: 0.25 * innerWidth, alignItems: 'center', justifyContent: 'flex-start' },
	headingContainer: { color: colors.primaryColor},
	formContainer: { flexDirection: 'column', display: 'flex', alignItems: 'flex-start', marginTop: 0.05 * innerHeight },
	inputFields: { backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, width: 0.25 * innerWidth, marginBottom: 0.02 * innerHeight, fontSize: 0.02 * innerHeight, height: 65, borderRadius: 40, border: '1px solid' + colors.primaryColor, outline: 'none' },
	inputLabel: {color: colors.primaryColor },
	button: { backgroundColor: colors.primaryColor},
	forgot: { color: colors.primaryColor },
	invalidEmail: { fontSize: 0.022 * innerHeight, textDecoration: 'none', marginBottom: 0.04 * innerHeight, alignSelf: 'flex-end', color: 'red' }
}

function Login(props) {
	console.log("======Props", props)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordHideToggle, setPasswordHideToggle] = useState(false)
	const [emailValid, setEmailValid] = useState()
	const [loading, setLoading] = useState()

	const [passwordValid, setPasswordValid] = useState()


	const user = useSelector((state) => state.user);
	// const loading = useSelector((state) => state.user?.loading);
	const success = useSelector((state) => state.user?.success);
	const error = useSelector((state) => state.user?.error);

console.log("===========,User",user)
	const dispatch = useDispatch();
	// if (user.user.data) {
	// 	dispatch(logout());
	// }
	let credentais = {
		email: email,
		password: password,
		fcm_token: '',
		enum: 'Client'
	}
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

	const checkPasswordValid = () => {

		if (password.length >= 8) {

			setPasswordValid(true)
		} else {
			if (password === '') {
				setPasswordValid(true)
			} else {
				setPasswordValid(false)
			}
		}

	}

	const handleSubmit = async () => {
		if (emailValid === true) {
			try {
				setLoading(true)
				const res = await axios.post(baseURL + '/api/login', credentais)
				console.log("========res",res)
				dispatch(loginSuccess(res));
				setLoading(false)
				navigate("/chat")

			}
			catch (e) {
				console.log("========res",e)

				setLoading(false)
				e.response.data.errors.map((item) => {
					if (item.email) {
						props.alert.error(item.email)
					}
					if (item.password) {
						props.alert.error(item.password)
					}
				})
			}
		}

	}

	return (
		<div className='Login-fullScreenContainer' >
			<div className='fullScreenContainerWithoutNav'>
				<div className='headingContainer' style={styles.headingContainer}>Log In</div>
				<div className='formContainer' style={styles.formContainer}>
					<div className='Login-inputLabel' style={styles.inputLabel}>Name:</div>
					<input className='login-inputFields' autoComplete={'off'} type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} onBlur={() => checkEmailValid()} />
					{emailValid === false && <div style={styles.invalidEmail}>Email is invalid</div>}
					<div className='Login-inputLabel' style={styles.inputLabel}>Password:</div>
					<div>
						<div onClick={() => setPasswordHideToggle(!passwordHideToggle)} className='eyeoff'>
							<img src={EyeOff} width={25} height={25} />
						</div>
						<input className='login-inputFields' autoComplete='off' type={passwordHideToggle ? 'text' : 'password'} value={password} onChange={(password) => setPassword(password.target.value)} style={styles.inputFields} onBlur={() => checkPasswordValid()} />
						{passwordValid === false && <div style={{ ...styles.invalidEmail, textAlign: 'end' }}    >Atleast 8 letters</div>}
					</div>
					<Link to={'/reset'} className='forgot' style={styles.forgot}>Forgot Password?</Link>
					<div className='login-btn' onClick={() => handleSubmit()} style={styles.button}>
						Log In
					</div>
					{loading &&
						<div className='Login-loading'  >
							<BallTriangle
								height={50}
								width={50}
								radius={5}
								color={colors.primaryColor}
								ariaLabel="ball-triangle-loading"
							/>
						</div>}
					<div className='hr-div' >
						<div className='Login-hr'  />
						<div className='Login-hr-content'>OR</div>
						<div className='Login-hr' />
					</div>
					<div className='Register-content'>Not a User <Link to={'/register'} className='register-link' style={{color: colors.primaryColor}}> {'Register'} </Link> From Email</div>
				</div>
			</div>
		</div>
	)
}

export default withAlert()(Login)
