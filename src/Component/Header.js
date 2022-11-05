import React, { useEffect, useState } from 'react'
import { colors } from '../Constants/Constants'
import { Link } from 'react-router-dom'
import IconTint from 'react-icon-tint'
//assets imports
import NotificationIcon from '../Assets/Header/NotificationIcon.png'
import ProfileIcon from '../Assets/Header/ProfileIcon.png'
import MessagesIcon from '../Assets/Header/MessagesIcon.png'
import WalletIcon from '../Assets/Header/WalletIcon.png'
import ServicesIcon from '../Assets/Header/ServicesIcon.png'
import LoginIcon from '../Assets/Header/LoginIcon.png'
import Logo from '../Assets/Header/POPFAMELOGO.png'
import StepProgressBar from 'react-step-progress';
import Dropdown from 'react-dropdown';
import { useDispatch, useSelector } from 'react-redux'
import { baseURL, service, success } from '../Redux/Actions/serviceAction'
import axios from 'axios'

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { logout } from '../Redux/Actions/loginAction'


const { innerHeight, innerWidth } = window

const styles = {
    fullWidthContainer: { zIndex: 9999, position: 'fixed', width: innerWidth, height: innerHeight * 0.10, alignItems: 'center', justifyContent: 'center', display: 'flex', backgroundColor: 'white' },
    innerContainer: { width: innerWidth * 0.9, height: innerHeight * 0.10, alignItems: 'center', justifyContent: 'space-between', display: 'flex' },
    buttonsAndIconsContainer: { width: 0.4 * innerWidth, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    buttonContainer: { borderRadius: 100, height: 0.05 * innerHeight, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', display: 'flex' },
    iconContainer: { height: 0.1 * innerHeight, justifyContent: 'center', display: 'flex', alignItems: 'center', cursor: 'pointer', right: '10vw', position: 'absolute' },
    profileDropdownContainer: { display: 'flex', flexDirection: 'column', position: 'absolute', right: 0.005 * innerWidth, backgroundColor: colors.primaryColor, top: 0.09 * innerHeight, width: 0.12 * innerWidth, justifyContent: 'center', alignItems: 'center' }
}

const ButtonContainer = ({ text, width, onClick, hasDropDown }) => {
    const [isHover, setIsHover] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)


    return (
        <>
            <div
                onClick={hasDropDown ? () => setShowDropDown(!showDropDown) : null}
                style={{
                    backgroundColor: isHover ? colors.secondaryColor : colors.primaryColor,
                    width: width,
                    color: isHover ? colors.primaryColor : 'white',
                    cursor: 'pointer',
                    ...styles.buttonContainer
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {text}
            </div>
            {showDropDown && <PostAJobDropDown />}
        </>
    )
}
function step2Validator() {
    // return a boolean
}

function step3Validator() {
    // return a boolean
}

function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
}
const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;

const PostAJobDropDown = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state?.user?.user?.data?.token)
    const categories = useSelector((state) => state.service.service)
    console.log("========,", categories)
    const [categoriesMap, setCategoriesMap] = useState()
    const [categoriesName, setCategoriesName] = useState([])
    const getConfig = () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        return config
    }
    useEffect(() => {
        callApi()
    }, [])
    useEffect(() => {
        console.log('catenamefirst: ', categoriesName)
        console.log('cat map: ', categoriesMap)
        categoriesMap?.map((item) => {
            console.log('item: ', item)
            console.log(categoriesName.includes(item.name))
            if (categoriesName.includes(item.name)) { }
            else {
                categoriesName.push(item.name)
            }
        })

        console.log('catename: ', categoriesName)
    }, [categoriesMap, categoriesName])
    const callApi = async () => {
        try {
            const res = await axios.post(baseURL + '/api/categories/get', {}, getConfig())
            console.log("=======res", res)
            setCategoriesMap(res.data.data)

            dispatch(success(res));

        }
        catch (e) {
            console.log('err: ', e)

        }
    }
    return (
        <div style={{
            backgroundColor: 'white', borderRadius: 20, width: 0.5 * innerWidth, height: 0.38 * innerHeight, alignItems: 'center', position: 'absolute', zIndex: 9999, top: 0.1 * innerHeight, right: 0.3 * innerWidth,
            boxShadow: '0.5px 0.5px 1px 2px rgb(0 0 0 / 15%)',

        }}>
            {/* <div style={{ width: '100%', backgroundColor: 'ornage', flexDirection: 'row', display: "flex" ,height:100}} */}
            <ProgressBar
                percent={80}
                filledBackground={colors.primaryColor}
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        accomplished ?
                            <div style={{ width: 20, height: 20, backgroundColor: colors.primaryColor, borderRadius: 10 }} /> :
                            <div style={{ width: 20, height: 20, backgroundColor: 'lightgray', borderRadius: 10 }} />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        accomplished ?
                            <div style={{ width: 20, height: 20, backgroundColor: colors.primaryColor, borderRadius: 10 }} /> :
                            <div style={{ width: 20, height: 20, backgroundColor: 'lightgray', borderRadius: 10 }} />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        accomplished ?
                            <div style={{ width: 20, height: 20, backgroundColor: colors.primaryColor, borderRadius: 10 }} /> :
                            <div style={{ width: 20, height: 20, backgroundColor: 'lightgray', borderRadius: 10 }} />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        accomplished ?
                            <div style={{ width: 20, height: 20, backgroundColor: colors.primaryColor, borderRadius: 10 }} /> :
                            <div style={{ width: 20, height: 20, backgroundColor: 'lightgray', borderRadius: 10 }} />
                    )}
                </Step>
            </ProgressBar>
            {/* </div> */}
            <div style={{ width: "100%", display: "flex", padding: 30, alignItems: "center", justifyContent: "center", fontSize: 27, fontWeight: '400', alignSelf: 'flex-end' }}>
                Please Select Service
            </div>
            <div style={{ width: "100%", display: "flex", padding: 30, alignItems: "center", justifyContent: "center", }}>
                <Dropdown menuClassName="menuClass" placeholderClassName="placeholderClass" controlClassName='dropdown' className="dropdownContainer" options={categoriesName} value={'Landscaping'} placeholder="Select an option"
                    arrowClosed={<span className="arrow-closed" />}
                    arrowOpen={<span className="arrow-open" />} />
            </div>
            <div style={{ width: '100%', display: "flex", justifyContent: 'space-between', marginTop: 30 }}>
                <div style={{ backgroundColor: '#FEF7F7', borderColor: colors.primaryColor, borderRadius: 40, width: 171, height: 55, alignItems: "center", borderWidth: 1, color: 'black', fontSize: 22, margin: 10, justifyContent: 'center', display: 'flex', borderStyle: 'solid', cursor: 'pointer' }}>
                    Previous
                </div>
                <div style={{ backgroundColor: colors.primaryColor, borderRadius: 40, width: 171, height: 55, alignItems: "center", color: 'white', fontSize: 22, margin: 10, justifyContent: 'center', display: 'flex', cursor: 'pointer' }}>
                    Next
                </div>
            </div>
        </div>
    )
}

const RenderProfileDropdown = ({ dropdownOptions }) => {
    const [hoverOn, setHoverOn] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.user)

    const handleLogoutDispatch = () => {
        if (user.user.data) {
            dispatch(logout());
        }
    }
    return (
        <div style={styles.profileDropdownContainer}>
            {dropdownOptions && dropdownOptions.map(({ text, icon, navigateTo, separator }) =>
                <Link to={navigateTo} style={{ textDecoration: 'none' }} onClick={() => text === 'Logout' && handleLogoutDispatch()}>
                    {separator && <div style={{ borderTop: '1px solid #FFFFFF', width: 0.1 * innerWidth }} />}
                    <div onMouseEnter={() => setHoverOn(text)}
                        style={{ backgroundColor: hoverOn === text ? colors.secondaryColor : colors.primaryColor, height: 0.04 * innerHeight, alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 0.01 * innerHeight, marginBottom: 0.01 * innerHeight, width: 0.12 * innerWidth }}>
                        <div style={{ backgroundColor: hoverOn === text ? colors.secondaryColor : colors.primaryColor, height: 0.04 * innerHeight, alignItems: 'center', justifyContent: 'space-between', display: 'flex', marginTop: 0.01 * innerHeight, marginBottom: 0.01 * innerHeight, width: 0.07 * innerWidth }}>
                            <IconTint src={icon} color={text === hoverOn ? colors.primaryColor : 'white'} style={{ height: 0.03 * innerHeight }} />
                            <p style={{ color: text === hoverOn ? colors.primaryColor : 'white', textAlign: 'left', width: 0.045 * innerWidth, fontWeight: 'bold' }}>{text}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

const IconContainer = ({ imageSrc, hasDropDown, dropdownOptions }) => {
	const [showDropDown, setShowDropDown] = useState(false)
	return (
		<div
			style={styles.iconContainer}
			onMouseEnter={hasDropDown ? () => setShowDropDown(true) : null}
			onMouseLeave={hasDropDown ? () => setShowDropDown(false) : null}>
			<img src={imageSrc} alt='ddd' style={{height: 0.04 * innerHeight }} />
			{showDropDown && <RenderProfileDropdown dropdownOptions={dropdownOptions} />}
		</div>
	)
}

const NotificationContainer = ({ imageSrc, hasDropDown, dropdownOptions }) => {
	const [showDropDown, setShowDropDown] = useState(false)
	return (
		<div
			style={styles.iconContainer}
			onMouseEnter={hasDropDown ? () => setShowDropDown(true) : null}
			onMouseLeave={hasDropDown ? () => setShowDropDown(false) : null}>
			<IconTint src={imageSrc} color={showDropDown ? colors.secondaryColor : colors.primaryColor} style={{ height: 0.04 * innerHeight }} />
			{/* {showDropDown && <RenderNotificationDropdown dropdownOptions={dropdownOptions}/>} */}
		</div>
	)
}

const profileDropdownOptions = [
    {
        text: 'Services',
        icon: ServicesIcon,
        navigateTo: '/',
        separator: false
    },
    {
        text: 'Messages',
        icon: MessagesIcon,
        navigateTo: '/chat',
        separator: false
    },
    {
        text: 'Wallet',
        icon: WalletIcon,
        navigateTo: '/login',
        separator: false
    },
    {
        text: 'Login',
        icon: LoginIcon,
        navigateTo: '/login',
        separator: true
    },
]

// const notificationDropdownOptions = [
//     {
//         text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
//         icon: notificationBellicon,
//         navigateTo: '/',
//         separator: true
//     },
//     {
//         text:'Lorem ipsum dolor sit amet, consectetur ',
//         icon: notificationBellicon,
//         navigateTo: '/',
//         separator: false
//     },
//     {
//         text:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
//         icon: notificationBellicon,
//         navigateTo: '/',
//         separator: false
//     },
//     {
//         text:'Lorem ipsum dolor sit amet, consectetur  ',
//         icon: notificationBellicon,
//         navigateTo: '/',
//         separator: false
//     }
// ]

const Header = (props) => {
	const [profileImg, setProfileImg] = useState(ProfileIcon)
	const token = useSelector((state) => state?.user?.user?.data?.token)
	const profilePicture =useSelector((state) => state.user?.user?.data?.user?.profile_picture)
	useEffect(() => {
		let getImage = () => {
			const res = baseURL + '/api/request_images/' + profilePicture
			setProfileImg(res)
		 }  
		 getImage()
	  }, [])
	
	if (token) {
		profileDropdownOptions[3].text = 'Logout'
	}
	return (
		<div style={styles.fullWidthContainer}>
			<div style={styles.innerContainer}>
				<Link to={'/'}><img src={Logo} style={{ height: 0.08 * innerHeight }} /></Link>
				<div style={styles.buttonsAndIconsContainer}>
					{/* <ButtonContainer hasDropDown={true} width={0.2 * innerHeight} text={'Post a Job'} />
                    <ButtonContainer width={0.26 * innerHeight} text={'Become a Provider'} /> */}

					{/* <IconContainer imageSrc={NotificationIcon} hasDropDown={false} /> */}
					<IconContainer imageSrc={profileImg} hasDropDown={true} dropdownOptions={profileDropdownOptions} />
				</div>
			</div>
		</div>
	)
}

export default Header
