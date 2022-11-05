import React, { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Footer from '../Component/Footer'
import DownArrow from '../Assets/Services/DownArrow.png'
import ServicesBanner from '../Assets/Services/ServicesBanner.png'
import { colors } from '../Constants/Constants'
import IconTint from 'react-icon-tint'
import { Link } from 'react-router-dom'
import SearchLogo from "../Assets/Services/searchLogo.png"
import paint from "../Assets/Services/paint.png"
import Landscaping from '../Assets/Services/Slider/Landscaping.png'
import Cleaning from '../Assets/Services/Slider/Cleaning.png'
import FurnitureAssembly from '../Assets/Services/Slider/FurnitureAssembly.png'
import moving from '../Assets/Services/Slider/moving.png'
import Plumbing from '../Assets/Services/Slider/Plumbing.png'
import qrcode from '../Assets/Services/qrcode.png'
import ServiceProviderQrCode from '../Assets/Services/service-qrcode.png'
import '../Component/style.css'


import sleve from '../Assets/Services/Slider/sleve.png'
import glassesman from '../Assets/Services/Slider/glassesman.png'


import nextarrow from '../Assets/Services/Slider/nextarrow.png'
import prevarrow from '../Assets/Services/Slider/prevarrow.png'


import Ladyface from '../Assets/Services/Slider/Ladyface.png'

import Slider from "react-slick";

import { Rating } from 'react-simple-star-rating'

import Airbnd from '../Assets/Services/Slider/Airbnd.png'
import Automattic from '../Assets/Services/Slider/Automattic.png'
import Bissell from '../Assets/Services/Slider/Bissell.png'
import Godaddy from '../Assets/Services/Slider/Godaddy.png'
import Microsoft from '../Assets/Services/Slider/Microsoft.png'
import Nasdaq from '../Assets/Services/Slider/Nasdaq.png'
import TextTransition, { presets } from "react-text-transition";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import StarRatings from 'react-star-ratings';
const { innerHeight, innerWidth } = window
const TEXTS = [
	"Plumbing",
	"Landscaping",
	"Moving",
	"Furniture Assembly",
	"Cleaning",
	"Handyman",
];

const CustomControls = ({ getCurrentSlideIndex, slidesCount, onNext }) => {
	return (
		<div style={{ left: '50%', bottom: '10px', position: 'fixed', transform: 'translateX(-50%)', display: getCurrentSlideIndex() === 3 ? 'none' : 'block', zIndex: 999 }}>
			<IconTint src={DownArrow} onClick={onNext} color={colors.primaryColor} />
		</div>
	)

}

const ImgSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 0,
		cssEase: "linear",
		arrows: false
	};



	return (
		<div style={{ height: 0.45 * innerHeight, marginLeft: 0.045 * innerWidth, width: 0.92 * innerWidth }}>

			<Slider {...settings}>
				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={Landscaping} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
							color: 'white',
							height: '400px',
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							borderRadius: 0.02 * innerHeight,
							top: 0
						}}><p>Landscaping</p></div>
					</div>
				</div>

				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={Cleaning} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold',
							background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							height: '400px',
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							borderRadius: 0.02 * innerHeight,
							justifyContent: "center",
							top: 0,
						}}
						>
							<p>Cleaning</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={FurnitureAssembly} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							height: '400px',
							borderRadius: 0.02 * innerHeight,
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							top: 0
						}}><p>Furniture<br />Assembly</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>


				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={moving} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							height: '400px',
							borderRadius: 0.02 * innerHeight,
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							top: 0
						}}><p>Moving</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={Plumbing} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							borderRadius: 0.02 * innerHeight,
							height: '400px',
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							top: 0
						}}><p>Plumbing</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={FurnitureAssembly} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							height: '400px',
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							borderRadius: 0.02 * innerHeight,
							position: 'absolute',
							top: 0
						}}><p>Furniture<br />Assembly</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
						<img src={Plumbing} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
						<div style={{
							color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,.9))',
							color: 'white',
							height: '400px',
							borderRadius: 0.02 * innerHeight,
							height: 0.45 * innerHeight,
							width: 0.13 * innerWidth,
							position: 'absolute',
							top: 0
						}}><p>Plumbing</p>
							<div style={{
								height: "100%",
								justifyContent: "center",
								display: "flex",
								alignItems: "center"
							}}>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

			</Slider>
		</div>

	)
}

const CardSlider = () => {
	const [rating, setRating] = useState(0)

	// Catch Rating value
	const handleRating = (rate) => {
		setRating(1 + 1)

		// other logic
	}

	const onPointerEnter = () => console.log('Enter')
	const onPointerLeave = () => console.log('Leave')
	const onPointerMove = () => console.log()

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <img src={prevarrow} alt='' />,
		nextArrow: <img src={nextarrow} alt='' />,

	};
	return (
		<div style={{ 
			alignSelf: 'center', 
			width: 0.9 * innerWidth, 
			marginTop: 0.005 * innerHeight, 
			marginBottom: 0.02 * innerHeight,
			textAlign: '-webkit-center'
			}}>
			<Slider {...settings}>
				<div>
					<div style={{ 
						minHeight: 0.3 * innerHeight, 
						maxHeight: 0.6 * innerHeight, 
						width: 0.5 * innerHeight, 
						backgroundColor: '#FFFDFD', 
						boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
						borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
						<div style={{ paddingTop: 0.03 * innerHeight, paddingBottom: 0.03 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth }}>

							<div style={{ display: 'flex' }}>
								<div>
									<img src={Ladyface} alt='' />
								</div>
								<div>
									<p style={{ fontSize: 0.022 * innerHeight }} >Emma</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={5} /* Available Props */ />
								</div>
							</div>
							<div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
								<button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.008 * innerHeight }}>Landscaping</button>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw' }} src={Ladyface} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Paul Edmond <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw', borderRadius: '50%' }} src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Chris Lynn <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p style={{ lineHeight: 1 }}>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>
					<div style={{ minHeight: 0.3 * innerHeight, maxHeight: 0.6 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
						<div style={{ paddingTop: 0.03 * innerHeight, paddingBottom: 0.03 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth }}>

							<div style={{ display: 'flex' }}>
								<div>
									<img src={sleve} alt='' />
								</div>
								<div>
									<p style={{ fontSize: 0.022 * innerHeight }} >Steve</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={4} /* Available Props */ />
								</div>
							</div>
							<div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
								<button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.008 * innerHeight }}>Electrician</button>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw' }} src={Ladyface} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Paul Edmond <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw', borderRadius: '50%' }} src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Chris Lynn <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p style={{ lineHeight: 1 }}>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>
					<div style={{ minHeight: 0.3 * innerHeight, maxHeight: 0.6 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
						<div style={{ paddingTop: 0.03 * innerHeight, paddingBottom: 0.03 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth }}>

							<div style={{ display: 'flex' }}>
								<div>
									<img src={glassesman} alt='' />
								</div>
								<div>
									<p style={{ fontSize: 0.022 * innerHeight }} >William</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={4} /* Available Props */ />
								</div>
							</div>
							<div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
								<button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.008 * innerHeight }}>Plumbing</button>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw' }} src={Ladyface} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Paul Edmond <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw', borderRadius: '50%' }} src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Chris Lynn <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p style={{ lineHeight: 1 }}>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>
					<div style={{ minHeight: 0.3 * innerHeight, maxHeight: 0.6 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
						<div style={{ paddingTop: 0.03 * innerHeight, paddingBottom: 0.03 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth }}>

							<div style={{ display: 'flex' }}>
								<div>
									<img src={Ladyface} alt='' />
								</div>
								<div>
									<p style={{ fontSize: 0.022 * innerHeight }} >Emma</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} /* Available Props */ />
								</div>
							</div>
							<div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
								<button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.008 * innerHeight }}>Landscaping</button>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw' }} src={Ladyface} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Paul Edmond <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div style={{ textAlign: 'initial', marginTop: 0.02 * innerHeight, backgroundColor: '#e9e9e9', borderRadius: '3%', padding: '3%' }}>
								<div style={{ display: 'flex' }}>
									<div>
										<img style={{ width: '2vw', borderRadius: '50%' }} src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div style={{ lineHeight: 0, marginLeft: '0.5vw', width: '80%' }}>
										<p style={{ fontSize: 0.015 * innerHeight }} >Chris Lynn <span style={{ fontSize: '1vh', float: 'right' }}>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p style={{ lineHeight: 1 }}>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</Slider>

		</div>
	)

}


const CompanySlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 1000,
		cssEase: "linear",
		arrows: false
	};

	return (
		<div>
			<Slider {...settings}>

				<div>
					<img src={Airbnd} alt='alt' />
				</div>
				<div>
					<img src={Automattic} alt='alt' />
				</div>
				<div>
					<img src={Godaddy} alt='alt' />
				</div>
				<div>
					<img src={Nasdaq} alt='alt' />
				</div>
				<div>
					<img src={Bissell} alt='alt' />
				</div>
				<div>
					<img src={Microsoft} alt='alt' />
				</div>
			</Slider>
		</div>
	)
}

const Home = () => {
	const baseStyle = { alignItems: 'flex-end', zIndex: 111, display: 'flex', justifyContent: 'center', background: 'white' }
	const imageHeightUnit = 397
	const [index, setIndex] = React.useState(0);
	React.useEffect(() => {
		const intervalId = setInterval(() =>
			setIndex(index => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		// <div>Home</div>
		<FullPage controls={CustomControls}>
			{/* banner */}
			<Slide style={{ ...baseStyle }}>
				<div style={{ height: 0.9 * innerHeight, width: 0.9 * innerWidth, flexDirection: 'row', display: 'flex' }}>
					<div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex', width: 0.45 * innerWidth, height: 0.9 * innerHeight }}>
						<div style={{ display: "flex", width: 0.5 * innerWidth, flexDirection: 'row', }}>
							<div style={{ marginTop: 0.1 * innerHeight, fontWeight: '500', fontSize: 0.05 * innerHeight, textAlign: 'left', display: 'flex', flexDirection: "row" }}>
								<p>  Quality Home Services,
									<span style={{ color: 'black', display: 'block' }}>On Demand</span>
									<span style={{ width: 0.20 * innerWidth, maxHeight: 100, color: colors.primaryColor, fontSize: 0.07 * innerHeight }}>
										<TextTransition springConfig={presets.wobbly}>
											{TEXTS[index % TEXTS.length]}
										</TextTransition>
									</span>
								</p>
							</div>
						</div>
						{/* <div style={{ marginTop: 0.1 * innerHeight, fontWeight: '500', fontSize: 0.08 * innerHeight, textAlign: 'left', display: 'flex', }}>Quality Home Services, On Demand
              <div  style={{color:colors.primaryColor,}}>
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </div>
            </div> */}
						<div style={{ marginTop: 0.01 * innerHeight, fontSize: 0.03 * innerHeight, textAlign: 'left', display: 'flex' }}>Finding Home Services is now Smoother,<br /> Faster and Better</div>
						<div style={{ border: "1px solid #AEA6A6", borderRadius: 0.3 * innerWidth, display: 'flex', marginTop: 0.01 * innerHeight, width: 0.35 * innerWidth, height: 0.09 * innerHeight, alignItems: 'center', justifyContent: 'center' }}>
							<img src={SearchLogo} alt="search-logo" style={{ width: 0.015 * innerWidth }} />
							<input style={{ border: 'none', width: 0.23 * innerWidth, fontSize: 0.022 * innerHeight, marginLeft: 0.005 * innerWidth, outline: 'none' }} type="text" placeholder='Enter Here' />
							<input type="submit" value="Search" style={{ width: 0.09 * innerWidth, height: 0.08 * innerHeight, borderRadius: 300, border: 'none', backgroundColor: colors.primaryColor, color: 'white', fontSize: 0.026 * innerHeight }} />
						</div>
					</div>
					<div style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', width: 0.45 * innerWidth, height: 0.9 * innerHeight }}>
						<img src={ServicesBanner} alt="ddd" style={{ height: 0.8 * innerHeight }} />
					</div>
				</div>
			</Slide>
			{/* services */}
			<Slide style={{ ...baseStyle, background: colors.secondaryColor }}>
				<div style={{ height: 0.9 * innerHeight, width: innerWidth, flexDirection: 'column', display: 'flex' }}>
					<div style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', display: 'flex', height: 0.27 * innerHeight }}>
						<div style={{ backgroundColor: '#fff', border: "1px solid #AEA6A6", borderRadius: 0.3 * innerWidth, zIndex: 1, display: 'flex', marginTop: 0.1 * innerHeight, width: 0.3 * innerWidth, height: 0.07 * innerHeight, alignItems: 'center', justifyContent: 'center' }}>
							<img src={SearchLogo} alt="search-logo" style={{ height: 0.015 * innerWidth }} />
							<input style={{ border: 'none', width: 0.23 * innerWidth, fontSize: 0.022 * innerHeight, marginLeft: 0.005 * innerWidth, outline: 'none' }} type="text" placeholder='Enter Here' />
						</div>
						<img src={paint} alt='search-logo' style={{ height: 0.25 * innerHeight, marginTop: -0.175 * innerHeight, marginLeft: -0.35 * innerHeight }} />


					</div>
					<div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex', height: 0.1 * innerHeight }}>
						<h1 style={{ fontSize: 0.04 * innerHeight }}>What We Offer</h1>
					</div>
					<ImgSlider />
					<div>

					</div>

				</div>

			</Slide>
			<Slide style={{ ...baseStyle }}>
				<div style={{ height: 0.9 * innerHeight, width: innerWidth, flexDirection: 'column', display: 'flex' }}>
					<div style={{ height: 0.2 * innerHeight, display: 'flex', justifyContent: 'center' }}>
						<h1 style={{ fontSize: 0.05 * innerHeight, alignself: 'center' }}>Find Services Providers In Town</h1>
					</div>
					<CardSlider />

					{/* <div style={{
						height: 0.2 * innerHeight, width: 0.9 * innerWidth, display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						placeSelf: 'center'
					}}>
						<p>Trusted By</p>
						<CompanySlider />
					</div> */}

				</div>
			</Slide>
			<Slide style={{ ...baseStyle }}>
				<div style={{ height: 0.9 * innerHeight, flexDirection: 'column', display: 'flex' }}>

					<div style={{ height: 0.2 * innerHeight, width: 0.9 * innerWidth, alignSelf: 'center' }}>
						<h3 style={{ fontSize: 0.04 * innerHeight, fontWeight: 600 }}>Download Our Android App for more features</h3>
						<p>Scan the following QR code to download our applications.</p>
					</div>
					<div style={{ height: 0.4 * innerHeight, width: 0.9 * innerWidth, alignSelf: 'center', display: 'flex', justifyContent: 'space-around' }}>
						<div className='main-div-second-column'>
							<img style={{ width: 0.17 * innerWidth, height: 0.3 * innerHeight }} src={qrcode} alt="logo" className='' />
							<p style={{ fontSize: 0.03 * innerHeight, fontWeight: 600 }}>Popfame - Client</p>
						</div>

						<div className='main-div-second-column'>
							<img style={{ width: 0.17 * innerWidth, height: 0.3 * innerHeight }} src={ServiceProviderQrCode} alt="logo" className='' />
							<p style={{ fontSize: 0.03 * innerHeight, fontWeight: 600 }}>Popfame - Service Provider</p>
						</div>
					</div>
					<Footer />

				</div>

			</Slide>


		</FullPage>
	);
}

export default Home
