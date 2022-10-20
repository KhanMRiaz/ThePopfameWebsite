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
        <div style={{ height: 0.3 * innerHeight, width:0.909 * innerWidth, flexDirection: 'column', display: 'flex',backgroundColor:'#8d624c4d' 
        ,paddingLeft:0.04*innerWidth,paddingRight:0.04*innerWidth
        }}>

     
        <div className='first-child-section'>
    
          <div className=''>
          <img src={Logo} style={{height:0.08*innerHeight}} alt="logo" className='' />
    
          </div>
          <div className='links-child-section'>
    
           <ul className='ul-links-section'>
            <li className='list-links-section'>
              <Link className='a-tag-section' to='/'>Services</Link>
              </li>
            <li className='list-links-section'>
              <Link className='a-tag-section' to='/'>Wallet</Link>
              </li>
            <li className='list-links-section'>
              <Link className='a-tag-section' to='/'>SUPPORT</Link>
              </li>
            <li className='list-links-section' >
              <Link className='a-tag-section' to='/'>Messages</Link>
              </li>
            <li className='list-links-section'>
              <Link className='a-tag-section' to='/'>Find SP</Link>
              </li>
            <li className='list-links-section'>
              <Link className='a-tag-section' to='/'>T & C</Link>
              </li>
           </ul>
    
          </div>
          <div className='firstchild-last-section'>
            <ul className='firstchild-last-ul-section'>
        <li className='firstchild-last-list-section'> 
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
    
          <div className='second-child-section'>
            <div className='second-child-text-section'>
              <p className='p-tag-second-child-text-section'>&copy; 2022,<span className='span-tag-second-child-text-section'>POP FAME .</span> All Rights Reserved</p>
    
            </div>
            <div className='second-child-social-links-section'>
              <ul className='ul-child-social-links-section'>
                <li className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={FacebookIcon} alt="logo" className='' />
                  </Link>
                </li>
                <li className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={InstagramIcon} alt="logo" className='' />
                  </Link>
                </li> 
                <li className='list-child-social-links-section'>
                <Link className='a-tag-child-social-links-section' to='/'>
                  <img src={TwitterIcon} alt="logo" className=''/>
                  </Link>
                </li>
                <li className='list-child-social-links-section'>
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
