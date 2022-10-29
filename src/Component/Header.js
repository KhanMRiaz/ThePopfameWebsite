import React ,{ useState } from 'react'
import { colors } from '../Constants/Constants'
import {Link} from 'react-router-dom'
import IconTint from 'react-icon-tint'
//assets imports
import NotificationIcon from '../Assets/Header/NotificationIcon.png'
import ProfileIcon from '../Assets/Header/ProfileIcon.png'
import MessagesIcon from '../Assets/Header/MessagesIcon.png'
import WalletIcon from '../Assets/Header/WalletIcon.png'
import ServicesIcon from '../Assets/Header/ServicesIcon.png'
import LoginIcon from '../Assets/Header/LoginIcon.png'
import Logo from '../Assets/Header/Logo.png'

import notificationBellicon from '../Assets/Header/notificationBellicon.png'
import emailIcon from '../Assets/Header/emailIcon.png'



const {innerHeight,innerWidth} = window

const styles ={
    fullWidthContainer:{zIndex:9999, position:'fixed', width: innerWidth, height: innerHeight*0.10, alignItems: 'center', justifyContent: 'center', display: 'flex',backgroundColor:'white' },
    innerContainer: { width: innerWidth*0.9, height:  innerHeight*0.10, alignItems: 'center', justifyContent: 'space-between', display: 'flex' },
    buttonsAndIconsContainer: { width: 0.4*innerWidth, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    buttonContainer: { borderRadius: 100, height: 0.05*innerHeight, fontWeight: 'bold', alignItems: 'center', justifyContent:'center', display:'flex' },
    iconContainer: { height: 0.1*innerHeight, justifyContent: 'center', display: 'flex', alignItems: 'center',cursor:'pointer' },
    profileDropdownContainer: {display:'flex', flexDirection:'column', position:'absolute',right:0.05*innerWidth,backgroundColor:colors.secondaryColor, top: 0.09*innerHeight,width:0.12*innerWidth,justifyContent:'center',alignItems:'center'},
    NotificationDropdownContainer: {display:'flex', flexDirection:'column', position:'absolute',right:0.12*innerWidth,backgroundColor:colors.secondaryColor, top: 0.09*innerHeight,width:0.2*innerWidth,justifyContent:'end',alignItems:'center',height:0.45*innerHeight, borderRadius: '20px 0px 20px 20px'}
}

const ButtonContainer = ({text,width}) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div 
        style={{
            backgroundColor: isHover ? colors.secondaryColor : colors.primaryColor,
            width:width,
            color: isHover ? colors.primaryColor : 'white',
            ...styles.buttonContainer
        }}
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}>
            {text}
        </div>
    )
}

const RenderProfileDropdown = ({dropdownOptions}) => {
    const [hoverOn, setHoverOn] = useState('')
    return (
        <div style={styles.profileDropdownContainer}>
            {dropdownOptions && dropdownOptions.map(({text,icon,navigateTo,separator})=><Link to={navigateTo} style={{textDecoration:'none'}}>
                {separator  && <div style={{borderTop:'1px solid #FFFFFF',width:0.1*innerWidth}}/>}
                    <div onMouseEnter={()=>setHoverOn(text)}
                        style={{backgroundColor:hoverOn === text ? colors.secondaryColor : colors.secondaryColor, height:0.04*innerHeight,alignItems:'center',justifyContent:'center',display:'flex',marginTop:0.01*innerHeight,marginBottom: 0.01*innerHeight,width:0.12*innerWidth}}>
                        <div style={{backgroundColor:hoverOn === text ? colors.secondaryColor : colors.secondaryColor, height:0.04*innerHeight,alignItems:'center',justifyContent:'space-between',display:'flex',marginTop:0.01*innerHeight,marginBottom: 0.01*innerHeight,width:0.07*innerWidth}}>
                        <IconTint src={icon} color={text === hoverOn ? colors.primaryColor : colors.primaryColor} style={{height:0.03*innerHeight}}/>
                        <p style={{color:text === hoverOn ? colors.primaryColor : colors.primaryColor, textAlign:'left',width:0.045*innerWidth,fontWeight:'bold'}}>{text}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

const RenderNotificationDropdown = ({dropdownOptions}) => {
    const [hoverOn, setHoverOn] = useState('')
    return (
        <div style={styles.NotificationDropdownContainer}>
            <div style={{backgroundColor:colors.secondaryColor,width:0.18*innerWidth,height:0.07*innerHeight,display: 'flex',alignItems:'center'}}>

            <IconTint color={ colors.primaryColor} src={notificationBellicon}  style={{height:0.045*innerHeight,marginRight:0.007*innerWidth}}/>
            <p style={{color:colors.primaryColor}}>Notification (1)</p>
            </div>

            {dropdownOptions && dropdownOptions.map(({text,icon,navigateTo,separator})=><Link to={navigateTo} style={{textDecoration:'none'}}>
                 <div style={{borderBottom:'1px solid #FFFFFF',width:0.18*innerWidth}}/>
                     <div onMouseEnter={()=>setHoverOn(text)}
                        style={{backgroundColor:hoverOn === text ? 'blue' : colors.primaryColor, height:0.09*innerHeight,alignItems:'center',justifyContent:'center',display:'flex',width:0.18*innerWidth}}>
                        <div style={{backgroundColor:separator ? '#EFE0D8' : colors.secondaryColor, height:0.09*innerHeight,alignItems:'center',justifyContent:'space-between',display:'flex',width:0.18*innerWidth}}>
                        <IconTint src={icon} color={separator ? colors.primaryColor : 'white'} style={{height:0.045*innerHeight,marginRight:0.007*innerWidth}}/>
                        <p style={{color:colors.primaryColor , textAlign:'left',width:0.2*innerWidth,fontWeight:'bold',fontSize:0.02*innerHeight}}>{text}</p>
                       {separator && <img src={emailIcon} alt='ddd' style={{marginBottom:0.04*innerHeight}}/>}
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

const IconContainer = ({imageSrc,hasDropDown,dropdownOptions}) => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div 
        style={styles.iconContainer}
        onMouseEnter={hasDropDown ? ()=>setShowDropDown(true) : null}
        onMouseLeave={hasDropDown ? ()=>setShowDropDown(true) : null}>
            <IconTint src={imageSrc} color = {showDropDown ? colors.secondaryColor : colors.primaryColor} style={{height:0.035*innerHeight}}/>
            {showDropDown && <RenderProfileDropdown dropdownOptions={dropdownOptions}/>}
        </div>
    )
}

const NotificationContainer = ({imageSrc,hasDropDown,dropdownOptions}) => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div 
        style={styles.iconContainer}
        onMouseEnter={hasDropDown ? ()=>setShowDropDown(true) : null}
        onMouseLeave={hasDropDown ? ()=>setShowDropDown(false) : null}>
            <IconTint src={imageSrc} color = {showDropDown ? colors.secondaryColor : colors.primaryColor} style={{height:0.035*innerHeight}}/>
            {showDropDown && <RenderNotificationDropdown dropdownOptions={dropdownOptions}/>}
        </div>
    )
}

const profileDropdownOptions = [
    {
        text:'Services',
        icon: ServicesIcon,
        navigateTo: '/',
        separator: false
    },
    {
        text:'Messages',
        icon: MessagesIcon,
        navigateTo: '/chat',
        separator: false
    },
    {
        text:'Wallet',
        icon: WalletIcon,
        navigateTo: '/login',
        separator: false
    },
    {
        text:'Login',
        icon: LoginIcon,
        navigateTo: '/login',
        separator: true
    }
]

const notificationDropdownOptions = [
    {
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
        icon: notificationBellicon,
        navigateTo: '/',
        separator: true
    },
    {
        text:'Lorem ipsum dolor sit amet, consectetur ',
        icon: notificationBellicon,
        navigateTo: '/',
        separator: false
    },
    {
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing ',
        icon: notificationBellicon,
        navigateTo: '/',
        separator: false
    },
    {
        text:'Lorem ipsum dolor sit amet, consectetur  ',
        icon: notificationBellicon,
        navigateTo: '/',
        separator: false
    }
]

const Header = (props) => {
    return (
        <div style={styles.fullWidthContainer}>
            <div style={styles.innerContainer}>
                <Link to={'/'}><img src={Logo} style={{height:0.08*innerHeight}} /></Link>
                <div style={styles.buttonsAndIconsContainer}>
                    <ButtonContainer width={0.2*innerHeight} text={'Post a Job'}/>
                    <ButtonContainer width={0.26*innerHeight} text={'Become a Provider'}/>

                    <NotificationContainer imageSrc={NotificationIcon} hasDropDown={true} dropdownOptions={notificationDropdownOptions}/>
                    <IconContainer imageSrc={ProfileIcon} hasDropDown={true} dropdownOptions={profileDropdownOptions}/>
                </div>
            </div>
        </div>
    )
}

export default Header
