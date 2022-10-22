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

const {innerHeight,innerWidth} = window

const styles ={
    fullWidthContainer:{zIndex:9999, position:'fixed', width: innerWidth, height: innerHeight*0.10, alignItems: 'center', justifyContent: 'center', display: 'flex',backgroundColor:'white' },
    innerContainer: { width: innerWidth*0.9, height:  innerHeight*0.10, alignItems: 'center', justifyContent: 'space-between', display: 'flex' },
    buttonsAndIconsContainer: { width: 0.4*innerWidth, flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    buttonContainer: { borderRadius: 100, height: 0.05*innerHeight, fontWeight: 'bold', alignItems: 'center', justifyContent:'center', display:'flex' },
    iconContainer: { height: 0.1*innerHeight, justifyContent: 'center', display: 'flex', alignItems: 'center',cursor:'pointer' },
    profileDropdownContainer: {display:'flex', flexDirection:'column', position:'absolute',right:0.05*innerWidth,backgroundColor:colors.primaryColor, top: 0.09*innerHeight,width:0.12*innerWidth,justifyContent:'center',alignItems:'center'}
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
                        style={{backgroundColor:hoverOn === text ? colors.secondaryColor : colors.primaryColor, height:0.04*innerHeight,alignItems:'center',justifyContent:'center',display:'flex',marginTop:0.01*innerHeight,marginBottom: 0.01*innerHeight,width:0.12*innerWidth}}>
                        <div style={{backgroundColor:hoverOn === text ? colors.secondaryColor : colors.primaryColor, height:0.04*innerHeight,alignItems:'center',justifyContent:'space-between',display:'flex',marginTop:0.01*innerHeight,marginBottom: 0.01*innerHeight,width:0.07*innerWidth}}>
                        <IconTint src={icon} color={text === hoverOn ? colors.primaryColor : 'white'} style={{height:0.03*innerHeight}}/>
                        <p style={{color:text === hoverOn ? colors.primaryColor : 'white', textAlign:'left',width:0.045*innerWidth,fontWeight:'bold'}}>{text}</p>
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
        onMouseLeave={hasDropDown ? ()=>setShowDropDown(false) : null}>
            <IconTint src={imageSrc} color = {showDropDown ? colors.secondaryColor : colors.primaryColor} style={{height:0.035*innerHeight}}/>
            {showDropDown && <RenderProfileDropdown dropdownOptions={dropdownOptions}/>}
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

const Header = (props) => {
    return (
        <div style={styles.fullWidthContainer}>
            <div style={styles.innerContainer}>
                <Link to={'/'}><img src={Logo} style={{height:0.08*innerHeight}} /></Link>
                <div style={styles.buttonsAndIconsContainer}>
                    <ButtonContainer width={0.2*innerHeight} text={'Post a Job'}/>
                    <ButtonContainer width={0.26*innerHeight} text={'Become a Provider'}/>

                    <IconContainer imageSrc={NotificationIcon} hasDropDown={false}/>
                    <IconContainer imageSrc={ProfileIcon} hasDropDown={true} dropdownOptions={profileDropdownOptions}/>
                </div>
            </div>
        </div>
    )
}

export default Header
