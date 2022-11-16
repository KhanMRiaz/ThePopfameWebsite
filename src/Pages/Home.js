import React, { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

import './Home.css'


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
		speed: 5000,
		autoplaySpeed: 1000,
		cssEase: "linear",
		arrows: false
	};



	return (
		<div className='secound-container-imgSlider'>

			<Slider {...settings}>
				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img' src={Landscaping} alt="ddd" />
						<div className='imgSlider-text-section'><p>Landscaping</p></div>
					</div>
				</div>

				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img' src={Cleaning} alt="ddd" />
						<div className='imgSlider-text-section imggradient'>
							<p>Cleaning</p>
							<div className='comming-soon'>
								<p>Coming Soon</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img imgborder' src={FurnitureAssembly} alt="ddd" />
						<div className='imgSlider-text-section imggradient'><p>Furniture<br />Assembly</p>
							<div className='comming-soon'>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>


				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img imgborder' src={moving} alt="ddd" />
						<div className='imgSlider-text-section imggradient'><p>Moving</p>
							<div className='comming-soon'>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img' src={Plumbing} alt="ddd"/>
						<div className='imgSlider-text-section imggradient'><p>Plumbing</p>
							<div className='comming-soon'>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img imgborder' src={FurnitureAssembly} alt="ddd" />
						<div className='imgSlider-text-section imggradient'><p>Furniture<br />Assembly</p>
							<div className='comming-soon'>
								<p>Coming Soon</p>
							</div></div>
					</div>
				</div>

				<div>
					<div className='secound-container-imgSlider-main-section'>
						<img className='imgSlider-main-section-img ' src={Plumbing} alt="ddd" />
						<div className='imgSlider-text-section imggradient'><p>Plumbing</p>
							<div className='comming-soon'>
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
		nextArrow: <img  src={nextarrow} alt='' />,

	};
	return (
		<div className='third-container-cardslider'>
			<Slider {...settings}>
				<div>
					<div className='cardsliderMain'>
						<div className='cardsliderMain-Padding'>

							<div className='cardsliderMain-img-section'>
								<div>
									<img src={Ladyface} alt='' />
								</div>
								<div>
									<p className='cardsliderMain-img-section-p-tag' >Emma</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={5} /* Available Props */ />
								</div>
							</div>
							<div className='cardsliderMain-btn'>
								<button>Landscaping</button>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img' src={Ladyface} alt='' />
									</div>
									<div className='main-comment-section'>
										<p  className='main-comment-section-p-tag'>Paul Edmond <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img image-border' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div className='main-comment-section'>
										<p className='main-comment-section-p-tag' >Chris Lynn <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p className='main-comment-section-2nd-p-tag'>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>

					<div className='cardsliderMain'>
						<div className='cardsliderMain-Padding'>

							<div className='cardsliderMain-img-section'>
								<div>
									<img src={sleve} alt='' />
								</div>
								<div>
									<p className='cardsliderMain-img-section-p-tag'>Steve</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={4} /* Available Props */ />
								</div>
							</div>
							<div className='cardsliderMain-btn'>
								<button>Electrician</button>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img' src={Ladyface} alt='' />
									</div>
									<div className='main-comment-section'>
										<p  className='main-comment-section-p-tag'>Paul Edmond <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img image-border' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div className='main-comment-section'>
										<p className='main-comment-section-p-tag' >Chris Lynn <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p className='main-comment-section-2nd-p-tag'>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>
				<div className='cardsliderMain'>
						<div className='cardsliderMain-Padding'>

							<div className='cardsliderMain-img-section'>
								<div>
									<img src={glassesman} alt='' />
								</div>
								<div>
									<p className='cardsliderMain-img-section-p-tag'>William</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={4} /* Available Props */ />
								</div>
							</div>
							<div className='cardsliderMain-btn'>
								<button >Plumbing</button>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img' src={Ladyface} alt='' />
									</div>
									<div className='main-comment-section'>
										<p  className='main-comment-section-p-tag'>Paul Edmond <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img image-border' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div className='main-comment-section'>
										<p className='main-comment-section-p-tag' >Chris Lynn <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p className='main-comment-section-2nd-p-tag'>Neat. I've got a recurring job scheduled</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div>
				<div className='cardsliderMain'>
						<div className='cardsliderMain-Padding'>

							<div className='cardsliderMain-img-section'>
								<div>
									<img src={Ladyface} alt='' />
								</div>
								<div>
									<p className='cardsliderMain-img-section-p-tag' >Emma</p>
									<Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} initialValue={5} /* Available Props */ />
								</div>
							</div>
							<div className='cardsliderMain-btn'>
								<button>Landscaping</button>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img' src={Ladyface} alt='' />
									</div>
									<div className='main-comment-section'>
										<p  className='main-comment-section-p-tag'>Paul Edmond <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p>Excellent Skill! Good Job</p>
									</div>
								</div>
							</div>

							<div className='cardslider-comment-section'>
								<div className='card-first-comment'>
									<div>
										<img className='card-first-comment-img image-border' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt='' />
									</div>
									<div className='main-comment-section'>
										<p className='main-comment-section-p-tag' >Chris Lynn <span className='main-comment-section-span-tag'>{(new Date()).getMonth()}/{(new Date()).getDate()}/{(new Date()).getYear()}</span></p>
										<p className='main-comment-section-2nd-p-tag'>Neat. I've got a recurring job scheduled</p>
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
		<FullPage  controls={CustomControls}>
			{/* banner */}
			<Slide className='baseStyle'>
				<div className='first-section'>
					<div className='first-section-text'>
						<div className='first-section-text-part1'>
							<div style={{ marginTop: 0.1 * innerHeight, fontWeight: '500', fontSize: 0.05 * innerHeight, textAlign: 'left', display: 'flex', flexDirection: "row" }}>
								<p>  Quality Home Services,
									<span style={{ display: 'block' }}>On Demand</span>
									<span className='catagories-span'>
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
						<div className='first-section-text-part2'>Finding Home Services is now Smoother,<br /> Faster and Better</div>
						<div className='search-input-section'>
							<img className='SearchLogo' src={SearchLogo} alt="search-logo"/>
							<input className='search-input-tag' type="text" placeholder='Enter Here' />
							<input className='search-btn' type="submit" value="Search"/>
						</div>
					</div>
					<div className='first-image-section'>
						<img className='Main-image' src={ServicesBanner} alt="ddd"/>
					</div>
				</div>
			</Slide>
			{/* services */}
			<Slide className='baseStyle' style={{ background: colors.secondaryColor }}>
				<div  className='secound-container'>
					<div className='secound-container-first-part'>
						<div className='secound-container-input-container'>
							<img src={SearchLogo} alt="search-logo" />
							<input className='secound-container-input-tag' type="text" placeholder='Enter Here' />
						</div>
						<img className='secound-container-paint-img' src={paint} alt='search-logo'/>


					</div>
					<div className='secound-container-h1-section'>
						<h1 style={{ fontSize: 0.04 * innerHeight }}>What We Offer</h1>
					</div>
					<ImgSlider />
					<div>

					</div>

				</div>

			</Slide>
			<Slide className='baseStyle third-container-color'>
				<div className='third-container'>
					<div className='third-container-text-section' >
						<h1 >Find Services Providers In Town</h1>
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
			<Slide className='baseStyle'>
				<div className='last-section-container'>

					<div className='last-section-container-text-section'>
						<h3>Download Our Android App for more features</h3>
						<p>Scan the following QR code to download our applications.</p>
					</div>
					<div className='qrcode-section' >
						<div className='main-div-second-column'>
							<img  src={qrcode} alt="logo" className='' />
							<p style={{ fontSize: 0.03 * innerHeight, fontWeight: 600 }}>Popfame - Client</p>
						</div>

						<div className='main-div-second-column'>
							<img src={ServiceProviderQrCode} alt="logo" className='' />
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
