import React from 'react'
import { Link } from 'react-router-dom'

import AppStore from '../Assets/Footer/AppStore.png'
import Logo from '../Assets/Header/POPFAMELOGO.png'
import './style.css'
import './Footer.css'


import GooglePlay from '../Assets/Footer/GooglePlay.png'
import YoutubeIcon from '../Assets/Footer/YoutubeIcon.png'
import FacebookIcon from '../Assets/Footer/FacebookIcon.png'
import TwitterIcon from '../Assets/Footer/TwitterIcon.png'
import InstagramIcon from '../Assets/Footer/InstagramIcon.png'
import MessagesIcon from '../Assets/Footer/MessagesIcon.png'

const { innerHeight, innerWidth } = window





const Footer = (props) => {
	return (
		<div className='footer-main-section'>


			<div className='footer-main-section-first-section'>

				<div className='first-section-logo'>
					<img src={Logo} alt="logo" className='' />

				</div>
				<div  className='links-child-section'>

					<ul className='ul-links-section'>
						<li className='list-links-section'>
							<Link to='/'>Services</Link>
						</li>
						<li className='list-links-section'>
							<Link to='/'>Wallet</Link>
						</li>
						<li className='list-links-section'>
							<Link to='/'>SUPPORT</Link>
						</li>
						<li className='list-links-section' >
							<Link to='/'>Messages</Link>
						</li>
						<li className='list-links-section'>
							<Link to='/'>Find SP</Link>
						</li>
						<li className='list-links-section'>
							<Link to='/'>T & C</Link>
						</li>
					</ul>

				</div>
				<div className='google-play-link-section'>
					<ul  className='firstchild-last-ul-section'>
						{/* <li style={{ paddingRight: 0.02 * innerWidth }} className='firstchild-last-list-section'>
							 <Link className='a-tag-firstchild-last-section' to='/'>
								<img src={AppStore} alt="logo" className='' />
							</Link> 
						</li> */}
						<li className='firstchild-last-list-section'>
							<a className='a-tag-firstchild-last-section' href='https://play.google.com/store/apps/details?id=com.popfameapp'>
								<img src={GooglePlay} alt="logo" className='' />
							</a>
						</li>

					</ul>
				</div>

			</div>

			<div className='second-child-section'>
				<div className='second-child-text-section'>
					<p className='p-tag-second-child-text-section'>&copy; 2022, <span className='span-tag-second-child-text-section'>POPFAME.</span> All Rights Reserved</p>

				</div>
				<div className='second-child-social-links-section'>
					<ul className='ul-child-social-links-section'>
						<li  className='list-child-social-links-section'>
							<Link className='a-tag-child-social-links-section' to='/'>
								<img src={FacebookIcon} alt="logo" className='' />
							</Link>
						</li>
						<li  className='list-child-social-links-section'>
							<Link className='a-tag-child-social-links-section' to='/'>
								<img src={InstagramIcon} alt="logo" className='' />
							</Link>
						</li>
						<li className='list-child-social-links-section'>
							<Link className='a-tag-child-social-links-section' to='/'>
								<img src={TwitterIcon} alt="logo" className='' />
							</Link>
						</li>
						<li className='list-child-social-links-section'>
							<Link className='a-tag-child-social-links-section' to='/'>
								<img src={YoutubeIcon} alt="logo" className='' />
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
