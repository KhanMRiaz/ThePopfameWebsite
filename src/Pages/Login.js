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

const { innerHeight, innerWidth } = window
const styles = {
	fullScreenContainer: { display: 'flex', height: innerHeight, alignItems: 'flex-end', justifyContent: 'center' },
	fullScreenContainerWithoutNav: { display: 'flex', flexDirection: 'column', height: 0.9 * innerHeight, width: 0.25 * innerWidth, alignItems: 'center', justifyContent: 'flex-start' },
	headingContainer: { color: colors.primaryColor, marginTop: 0.05 * innerHeight, display: 'flex', fontSize: 0.04 * innerHeight },
	formContainer: { flexDirection: 'column', display: 'flex', alignItems: 'flex-start', marginTop: 0.05 * innerHeight },
	inputFields: { backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, width: 0.25 * innerWidth, marginBottom: 0.02 * innerHeight, fontSize: 0.02 * innerHeight, height: 65, borderRadius: 40, border: '1px solid' + colors.primaryColor, outline: 'none' },
	inputLabel: { marginLeft: 0.01 * innerWidth, marginBottom: 0.01 * innerHeight, fontSize: 0.022 * innerHeight, color: colors.primaryColor },
	button: { marginBottom: 0.05 * innerHeight, width: 0.25 * innerWidth + 40, height: 65, backgroundColor: colors.primaryColor, borderRadius: 40, color: 'white', fontWeight: 'bold', fontSize: 0.022 * innerHeight, outline: 'none', border: 'none', alignItems: 'center', justifyContent: "center", display: "flex", cursor: 'pointer' },
	forgot: { fontSize: 0.022 * innerHeight, textDecoration: 'underline', marginBottom: 0.04 * innerHeight, alignSelf: 'flex-end', color: colors.primaryColor },
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
		<div style={styles.fullScreenContainer}>
			<div style={styles.fullScreenContainerWithoutNav}>
				<div style={styles.headingContainer}>Log In</div>
				<div style={styles.formContainer}>
					<div style={styles.inputLabel}>Name:</div>
					<input autoComplete={'off'} type="text" value={email} placeholder={'johndoe@gmail.com'} onChange={(email) => setEmail(email.target.value)} style={styles.inputFields} onBlur={() => checkEmailValid()} />
					{emailValid === false && <div style={styles.invalidEmail}>Email is invalid</div>}
					<div style={styles.inputLabel}>Password:</div>
					<div>
						<div onClick={() => setPasswordHideToggle(!passwordHideToggle)} style={{ position: 'absolute', right: 0.37 * innerWidth, marginTop: 23, width: 40 }}>
							<img src={EyeOff} width={25} height={25} />
						</div>
						<input autoComplete='off' type={passwordHideToggle ? 'text' : 'password'} value={password} onChange={(password) => setPassword(password.target.value)} style={styles.inputFields} onBlur={() => checkPasswordValid()} />
						{passwordValid === false && <div style={{ ...styles.invalidEmail, textAlign: 'end' }}    >Atleast 8 letters</div>}
					</div>
					<Link to={'/reset'} style={styles.forgot}>Forgot Password?</Link>
					<div onClick={() => handleSubmit()} style={styles.button}>
						Log In
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
					<div style={{ alignSelf: 'center', flexDirection: 'row', display: 'flex' }}>
						<div style={{ width: 0.07 * innerWidth, borderBottom: '1px solid ' + colors.primaryColor }} />
						<div style={{ transform: 'translateY(50%)', fontSize: 0.022 * innerHeight, color: colors.primaryColor, marginRight: 0.015 * innerWidth, marginLeft: 0.015 * innerWidth }}>OR</div>
						<div style={{ width: 0.07 * innerWidth, borderBottom: '1px solid ' + colors.primaryColor }} />
					</div>
					<div style={{ marginTop: 0.06 * innerHeight, alignSelf: 'center', flexDirection: 'row', display: 'flex', fontSize: 0.022 * innerHeight }}>Not a User <Link to={'/register'} style={{ color: colors.primaryColor, textDecoration: 'underline', paddingLeft: 8, paddingRight: 8, textDecorationColor: colors.primaryColor, fontWeight: '500' }}> {'Register'} </Link> From Email</div>
				</div>
			</div>
		</div>
	)
}

export default withAlert()(Login)
