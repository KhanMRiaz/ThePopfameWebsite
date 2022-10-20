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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import StarRatings from 'react-star-ratings';

const { innerHeight, innerWidth } = window

const CustomControls = ({ getCurrentSlideIndex, slidesCount, onNext }) => {
  return (
    <div style={{ left: '50%', bottom: '10px', position: 'fixed', transform: 'translateX(-50%)' }}>
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
    <div style={{ height: 0.45 * innerHeight, marginLeft: 0.045 * innerWidth,width: 0.92*innerWidth }}>

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
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              height: '400px',
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              position: 'absolute',
              borderRadius: 0.02 * innerHeight,
              top: 0
            }}><p>Cleaning</p></div>
          </div>
        </div>

        <div>
          <div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
            <img src={FurnitureAssembly} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
            <div style={{
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              height: '400px',
              borderRadius: 0.02 * innerHeight,
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              position: 'absolute',
              top: 0
            }}><p>Furniture<br />Assembly</p></div>
          </div>
        </div>


        <div>
          <div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
            <img src={moving} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
            <div style={{
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              height: '400px',
              borderRadius: 0.02 * innerHeight,
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              position: 'absolute',
              top: 0
            }}><p>Moving</p></div>
          </div>
        </div>

        <div>
          <div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
            <img src={Plumbing} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
            <div style={{
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              borderRadius: 0.02 * innerHeight,
              height: '400px',
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              position: 'absolute',
              top: 0
            }}><p>Plumbing</p></div>
          </div>
        </div>

        <div>
          <div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
            <img src={FurnitureAssembly} alt="ddd" style={{ height: 0.45 * innerHeight, borderRadius: 0.02 * innerHeight, width: 0.13 * innerWidth }} />
            <div style={{
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              height: '400px',
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              borderRadius: 0.02 * innerHeight,
              position: 'absolute',
              top: 0
            }}><p>Furniture<br />Assembly</p></div>
          </div>
        </div>

        <div>
          <div style={{ height: 0.45 * innerHeight, position: 'relative' }}>
            <img src={Plumbing} alt="ddd" style={{ height: 0.45 * innerHeight, width: 0.13 * innerWidth }} />
            <div style={{
              color: 'white', fontWeight: 'bold', background: 'linear-gradient(rgba(0,0,0,0.30),rgba(0,0,0,.18))',
              color: 'white',
              height: '400px',
              borderRadius: 0.02 * innerHeight,
              height: 0.45 * innerHeight,
              width: 0.13 * innerWidth,
              position: 'absolute',
              top: 0
            }}><p>Plumbing</p></div>
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
    prevArrow: <img style={{}} src={prevarrow} alt='' />,
    nextArrow: <img style={{    right: '65px !important'    }} src={nextarrow} alt='' />,

  };
  return (
    <div style={{ height: 0.48 * innerHeight, alignSelf: 'center', width: 0.95 * innerWidth, marginTop: 0.02 * innerHeight, marginBottom: 0.02 * innerHeight, marginLeft: 0.07 * innerHeight }}>
      <Slider {...settings}>
        <div>
          <div style={{ height: 0.5 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
            <div style={{ paddingTop: 0.04 * innerHeight, paddingBottom: 0.04 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth, paddingBottom: 0.02 * innerWidth }}>

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
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Delicious</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Healthyfood</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Cheflife</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Tasty</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Foodbloger</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Homemade</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>

              </div>

            </div>

          </div>
        </div>
        <div>
          <div style={{ height: 0.5 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
            <div style={{ paddingTop: 0.04 * innerHeight, paddingBottom: 0.04 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth, paddingBottom: 0.02 * innerWidth }}>

              <div style={{ display: 'flex' }}>
                <div>
                  <img src={sleve} alt='' />
                </div>
                <div>
                  <p style={{ fontSize: 0.022 * innerHeight }} >Steve</p>
                  <Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} /* Available Props */ />
                </div>
              </div>
              <div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Delicious</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Healthyfood</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Cheflife</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Tasty</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Foodbloger</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Homemade</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>

              </div>

            </div>

          </div>
        </div>
        <div>
          <div style={{ height: 0.5 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
            <div style={{ paddingTop: 0.04 * innerHeight, paddingBottom: 0.04 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth, paddingBottom: 0.02 * innerWidth }}>

              <div style={{ display: 'flex' }}>
                <div>
                  <img src={glassesman} alt='' />
                </div>
                <div>
                  <p style={{ fontSize: 0.022 * innerHeight }} >William</p>
                  <Rating size={20} onClick={handleRating} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} /* Available Props */ />
                </div>
              </div>
              <div style={{ textAlign: 'initial', marginTop: 0.03 * innerHeight }}>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Delicious</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Healthyfood</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Cheflife</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Tasty</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Foodbloger</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Homemade</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>

              </div>

            </div>

          </div>
        </div>
        <div>
          <div style={{ height: 0.5 * innerHeight, width: 0.5 * innerHeight, backgroundColor: '#FFFDFD', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: 0.02 * innerHeight, margin: 0.006 * innerHeight }}>
            <div style={{ paddingTop: 0.04 * innerHeight, paddingBottom: 0.04 * innerHeight, paddingLeft: 0.02 * innerWidth, paddingRight: 0.02 * innerWidth, paddingBottom: 0.02 * innerWidth }}>

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
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Delicious</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Healthyfood</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Cheflife</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Tasty</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Foodbloger</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Homemade</button>
                <button style={{ width: 0.07 * innerWidth, height: 0.04 * innerHeight, borderRadius: 0.2 * innerHeight, border: 'none', backgroundColor: 'rgba(141, 98, 76, 0.2)', margin: 0.009 * innerHeight }}>Recipe</button>

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


  return (
    // <div>Home</div>
    <FullPage controls={CustomControls}>
      {/* banner */}
      <Slide style={{ ...baseStyle }}>
        <div style={{ height: 0.9 * innerHeight, width: 0.9 * innerWidth, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex', width: 0.45 * innerWidth, height: 0.9 * innerHeight }}>
            <div style={{ marginTop: 0.1 * innerHeight, fontWeight: '500', fontSize: 0.08 * innerHeight, textAlign: 'left', display: 'flex' }}>Quality Home<br /> Services, On<br /> Demand Plumbing</div>
            <div style={{ marginTop: 0.1 * innerHeight, fontSize: 0.022 * innerHeight, textAlign: 'left', display: 'flex' }}>We Make Finding Home Services Smoother,<br /> Faster and Better</div>
            <div style={{ border: "1px solid #AEA6A6", borderRadius: 0.3 * innerWidth, display: 'flex', marginTop: 0.1 * innerHeight, width: 0.35 * innerWidth, height: 0.09 * innerHeight, alignItems: 'center', justifyContent: 'center' }}>
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
          <div style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', display: 'flex', height: 0.3 * innerHeight }}>
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

          <div style={{
            height: 0.2 * innerHeight,width: 0.9*innerWidth, display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            placeSelf:'center'
          }}>
            <p>Trusted By</p>
            <CompanySlider />
          </div>

        </div>
      </Slide>
      <Slide style={{ ...baseStyle}}>
 <div style={{ height: 0.9 * innerHeight, flexDirection: 'column', display: 'flex' }}>

<div style={{ height: 0.2 * innerHeight,width: 0.9 * innerWidth, alignSelf: 'center'}}>
  <h3 style={{fontSize: 0.04 * innerHeight, fontWeight:600}}>Download Our App</h3>
  <p>Scan the following QR code to download our applications.</p>

</div>
<div style={{ height: 0.4 * innerHeight,width: 0.9 * innerWidth,    alignSelf: 'center', display: 'flex',    justifyContent: 'space-around'}}>
  <div className='main-div-second-column'>
    <img style={{width: 0.17* innerWidth,height: 0.3 * innerHeight}} src={qrcode} alt="logo" className='' />
    <p style={{fontSize: 0.03 * innerHeight , fontWeight:600}}>Popfame-Client (Beta)</p>
  </div>

  <div className='main-div-second-column'>
    <img style={{width: 0.17* innerWidth,height: 0.3 * innerHeight}}  src={qrcode} alt="logo" className='' />
    <p style={{fontSize: 0.03 * innerHeight, fontWeight:600}}>Popfame-Service Provider (Beta)</p>
  </div>
</div>
<Footer />

</div> 

    </Slide>


    </FullPage>
  );
}

export default Home
