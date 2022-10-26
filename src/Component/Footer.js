import React from 'react'
import { Link } from 'react-router-dom'

import AppStore from '../Assets/Footer/AppStore.png'
import Logo from '../Assets/Header/Logo.png'
import './style.css'


import GooglePlay from '../Assets/Footer/GooglePlay.png'
import YoutubeIcon from '../Assets/Footer/YoutubeIcon.png'
import FacebookIcon from '../Assets/Footer/FacebookIcon.png'
import TwitterIcon from '../Assets/Footer/TwitterIcon.png'
import InstagramIcon from '../Assets/Footer/InstagramIcon.png'
import MessagesIcon from '../Assets/Footer/MessagesIcon.png'

const {innerHeight,innerWidth} = window





const Footer = (props) => {
    return (
        <div style={{ height: 0.3 * innerHeight, width: innerWidth, flexDirection: 'column', display: 'flex',backgroundColor:'#8d624c4d' 
        ,paddingLeft:0.1 * innerWidth,paddingRight:0.1 * innerWidth,paddingTop:0.03 * innerHeight
        }}>

     
        <div style={{width:0.97* innerWidth,height: 0.17 * innerHeight,    alignSelf: 'center', display: 'flex'}}>
    
          <div style={{width: 0.17* innerWidth}} className=''>
          <img src={Logo} style={{height:0.08*innerHeight}} alt="logo" className='' />
    
          </div>
          <div style={{width: 0.40*  innerWidth}} className='links-child-section'>
    
           <ul style={{columnCount: 3,listStyle: 'none',marginBlockEnd: 0}} className='ul-links-section'>
            <li className='list-links-section'>
              <Link style={{textDecoration: 'none',listStyle: 'none',color:' #000',}}  to='/'>Services</Link>
              </li>
            <li  className='list-links-section'>
              <Link style={{textDecoration: 'none',listStyle: 'none',color:' #000'}}  to='/'>Wallet</Link>
              </li>
            <li className='list-links-section'>
              <Link style={{textDecoration: 'none',listStyle: 'none',color:' #000'}}  to='/'>SUPPORT</Link>
              </li>
            <li className='list-links-section' >
              <Link style={{textDecoration: 'none',listStyle: 'none',color:' #000'}}  to='/'>Messages</Link>
              </li>
            <li className='list-links-section'>
              <Link  style={{textDecoration: 'none',listStyle: 'none',color:' #000'}}  to='/'>Find SP</Link>
              </li>
            <li className='list-links-section'>
              <Link style={{textDecoration: 'none',listStyle: 'none',color:' #000'}}  to='/'>T & C</Link>
              </li>
           </ul>
    
          </div>
          <div style={{width: 0.40* innerWidth,    display: 'flex',listStyle: 'none'}}>
            <ul style={{    listStyle: 'none',display:'flex'}} className='firstchild-last-ul-section'>
        <li style={{paddingRight: 0.02 * innerWidth}}  className='firstchild-last-list-section'> 
          <Link className='a-tag-firstchild-last-section' to='/'>
            <img src={AppStore} alt="logo" className='' />
            </Link>
            </li>
         <li className='firstchild-last-list-section'>
          <Link className='a-tag-firstchild-last-section' to='/'>
            <img src={GooglePlay} alt="logo" className='' />
            </Link>
          </li> 
    
          </ul>
          </div>
    
          </div>
    
          <div style={{width:0.97* innerWidth, alignSelf: 'center',height: 0.1 * innerHeight, display: 'flex'}} className='second-child-section'>
            <div style={{width:0.68 * innerWidth ,  textAlignLast: 'center'}} className='second-child-text-section'>
              <p className='p-tag-second-child-text-section'>&copy; 2022, <span style={{fontWeight: 600}} className='span-tag-second-child-text-section'>POPFAME.</span> All Rights Reserved</p>
    
            </div>
            <div style={{width:0.29 * innerWidth}} className='second-child-social-links-section'>
              <ul className='ul-child-social-links-section'>
                <li style={{paddingRight: 0.016 * innerWidth}} className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={FacebookIcon} alt="logo" className='' />
                  </Link>
                </li>
                <li style={{paddingRight: 0.016 * innerWidth}} className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={InstagramIcon} alt="logo" className='' />
                  </Link>
                </li> 
                <li style={{paddingRight: 0.016 * innerWidth}} className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={TwitterIcon} alt="logo" className=''/>
                  </Link>
                </li>
                <li style={{paddingRight: 0.016 * innerWidth}} className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={YoutubeIcon} alt="logo" className=''/>
                  </Link>
                </li>
              </ul>
    
            </div>
          </div>
            <div className='message-component'>
            <Link className='' to='/chat'>
            <img src={MessagesIcon} alt='ddd' />
            </Link>
            </div>
        </div>
    )
}

export default Footer
