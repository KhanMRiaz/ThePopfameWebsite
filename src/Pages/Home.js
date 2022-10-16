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
import Ladyface from '../Assets/Services/Slider/Ladyface.png'

import Airbnd from '../Assets/Services/Slider/Airbnd.png'
import Automattic from '../Assets/Services/Slider/Automattic.png'
import Bissell from '../Assets/Services/Slider/Bissell.png'
import Godaddy from '../Assets/Services/Slider/Godaddy.png'
import Microsoft from '../Assets/Services/Slider/Microsoft.png'
import Nasdaq from '../Assets/Services/Slider/Nasdaq.png'


import StarRatings from 'react-star-ratings';

const { innerHeight, innerWidth } = window

const CustomControls = ({ getCurrentSlideIndex, slidesCount, onNext }) => {
  // disabled={currentSlideIndex === slidesCount - 1}  
  // const currentSlideIndex = getCurrentSlideIndex();
  return (
    <div style={{ left: '50%', bottom: '10px', position: 'fixed', transform: 'translateX(-50%)' }}>
      {/* <img src={DownArrow}  onClick={onNext}/> */}
      <IconTint src={DownArrow} onClick={onNext} color={colors.primaryColor} />
    </div>
  )
  
}

const Home = () => {
  const baseStyle = { alignItems: 'flex-end', display: 'flex', justifyContent: 'center', background: 'white' }
  const imageHeightUnit = 397
  return (
    // <div>Home</div>
    <FullPage controls={CustomControls}>
      {/* banner */}
      <Slide style={{ ...baseStyle }}>
        <div style={{ height: 0.9 * innerHeight, width: 0.9 * innerWidth, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex', width: 0.45 * innerWidth, height: 0.9 * innerHeight }}>
            <div style={{ marginTop: 0.1 * innerHeight, fontWeight: '500', textAlign: 'left', display: 'flex' }}>Quality Home<br /> Services, On<br /> Demand Plumbing</div>
            <div style={{ marginTop: 0.1 * innerHeight, fontSize: 0.022 * innerHeight, textAlign: 'left', display: 'flex' }}>We Make Finding Home Services Smoother,<br /> Faster and Better</div>
            <div style={{ border: "1px solid #AEA6A6", borderRadius: 0.3 * innerWidth, display: 'flex', marginTop: 0.1 * innerHeight, width: 0.35 * innerWidth, height: 0.09 * innerHeight, alignItems: 'center', justifyContent: 'center' }}>
              <img src={SearchLogo} alt="search-logo" style={{ width: 0.015 * innerWidth }} />
              <input style={{ border: 'none', width: 0.23 * innerWidth, fontSize: 0.022 * innerHeight, marginLeft: 0.005 * innerWidth, outline: 'none' }} type="text" placeholder='Enter Here' />
              <input type="submit" value="Search" style={{ width: 0.09 * innerWidth, height: 0.08 * innerHeight, borderRadius: 300, border: 'none', backgroundColor: colors.primaryColor, color: 'white', fontSize: 0.026 * innerHeight }} />
            </div>
          </div>
          <div style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', width: 0.45 * innerWidth, height: 0.9 * innerHeight }}>
            <img src={ServicesBanner} style={{ height: 0.8 * innerHeight }} />
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
          <div style={{ height: 0.45 * innerHeight }}>

            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              ssr={true} 
              infinite={true}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 5,
                  slidesToSlide: 1 // optional, default to 1.
                }
              }}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["Tablet", "Mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>
              <div style={{height:0.45*innerHeight}}>
                <img src={Landscaping} style={{ height:0.45*innerHeight}}/>
                <div style={{marginTop:-0.42*innerHeight, color:'white',fontWeight:'bold'}}>Landscaping</div>
              </div>


            </Carousel>



          </div>
          <div>

          </div>

        </div>

      </Slide>
      <Slide style={{ ...baseStyle }}>
      <div style={{ height: 0.9 * innerHeight, width: innerWidth, flexDirection: 'column', display: 'flex' }}>
        <div style={{height: 0.2 * innerHeight, background: '#00c4ff',display:'flex',justifyContent:'center'}}>
          <h1 style={{ fontSize: 0.05 * innerHeight , alignself: 'center'}}>Find Services Providers In Town</h1>
        </div>

        <div style={{height: 0.5 * innerHeight,    alignSelf: 'center', width: 0.9*innerWidth}}>
        <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              ssr={true} 
              infinite={true}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                  slidesToSlide: 1 // optional, default to 1.
                }
              }}
              // autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["Tablet", "Mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div style={{height:0.5*innerHeight ,width:0.5*innerHeight,backgroundColor:'#FFFDFD' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:0.02*innerHeight}}>
                <div style={{paddingTop: 0.04*innerHeight,paddingBottom: 0.04*innerHeight,paddingLeft: 0.02*innerWidth,paddingBottom: 0.02*innerWidth}}>

                  <div style={{display:'flex'}}>
                  <div>
                    <img src={Ladyface} alt=''/>
                  </div>
                  <div>
                    <p style={{fontSize: 0.022 * innerHeight}} >Emma</p>
                    <StarRatings
                      starDimension='20'
                      rating={3}
                      starRatedColor="#FFC804"
                      starHoverColor="#FFC804"
                      changeRating={()=>{console.log('do nothing')}}
                      numberOfStars={5}
                      name='rating'
                      width={0.07*innerWidth}
                    />
                    </div>
                  </div>
                  <div style={{ textAlign: 'initial',marginTop:0.03*innerHeight}}>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delis</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delikokocious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>

                  </div>

                </div>

              </div>


              <div style={{height:0.5*innerHeight ,width:0.5*innerHeight,backgroundColor:'#FFFDFD' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:0.02*innerHeight}}>
                <div style={{paddingTop: 0.04*innerHeight,paddingBottom: 0.04*innerHeight,paddingLeft: 0.02*innerWidth,paddingBottom: 0.02*innerWidth}}>

                  <div style={{display:'flex'}}>
                  <div>
                    <img src={Ladyface} alt=''/>
                  </div>
                  <div>
                    <p style={{fontSize: 0.022 * innerHeight}} >Emma</p>
                    <StarRatings
                      starDimension='20'
                      rating={3}
                      starRatedColor="#FFC804"
                      starHoverColor="#FFC804"
                      changeRating={()=>{console.log('do nothing')}}
                      numberOfStars={5}
                      name='rating'
                      width={0.07*innerWidth}
                    />
                    </div>
                  </div>
                  <div style={{ textAlign: 'initial',marginTop:0.03*innerHeight}}>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delis</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delikokocious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>

                  </div>

                </div>

              </div>



              <div style={{height:0.5*innerHeight ,width:0.5*innerHeight,backgroundColor:'#FFFDFD' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:0.02*innerHeight}}>
                <div style={{paddingTop: 0.04*innerHeight,paddingBottom: 0.04*innerHeight,paddingLeft: 0.02*innerWidth,paddingBottom: 0.02*innerWidth}}>

                  <div style={{display:'flex'}}>
                  <div>
                    <img src={Ladyface} alt=''/>
                  </div>
                  <div>
                    <p style={{fontSize: 0.022 * innerHeight}} >Emma</p>
                    <StarRatings
                      starDimension='20'
                      rating={3}
                      starRatedColor="#FFC804"
                      starHoverColor="#FFC804"
                      changeRating={()=>{console.log('do nothing')}}
                      numberOfStars={5}
                      name='rating'
                      width={0.07*innerWidth}
                    />
                    </div>
                  </div>
                  <div style={{ textAlign: 'initial',marginTop:0.03*innerHeight}}>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delis</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delikokocious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>

                  </div>

                </div>

              </div>

                            <div style={{height:0.2*innerHeight ,backgroundColor:'#FFFDFD' ,boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:0.02*innerHeight}}>
                <div style={{paddingTop: 0.04*innerHeight,paddingBottom: 0.04*innerHeight,paddingLeft: 0.02*innerWidth,paddingBottom: 0.02*innerWidth}}>

                  <div style={{display:'flex'}}>
                  <div>
                    <img src={Ladyface} alt=''/>
                  </div>
                  <div>
                    <p style={{fontSize: 0.022 * innerHeight}} >Emma</p>
                    <StarRatings
                      starDimension='20'
                      rating={3}
                      starRatedColor="#FFC804"
                      starHoverColor="#FFC804"
                      changeRating={()=>{console.log('do nothing')}}
                      numberOfStars={5}
                      name='rating'
                      width={0.07*innerWidth}
                    />
                    </div>
                  </div>
                  <div style={{ textAlign: 'initial',marginTop:0.03*innerHeight}}>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delis</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delikokocious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>
                    <button style={{width:0.07*innerWidth,height:0.04*innerHeight,borderRadius:0.2*innerHeight,border:'none',backgroundColor:'rgba(141, 98, 76, 0.2)',margin: 0.01*innerHeight}}>Delicious</button>

                  </div>

                </div>

              </div>
            </Carousel>

        </div>
        <div style={{height: 0.2 * innerHeight}}>
          <p>Trusted By</p>
          <div>
          <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              ssr={true} 
              infinite={true}
              arrows={false}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 6,
                  slidesToSlide: 1 // optional, default to 1.
                }
              }}
              // autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["Tablet", "Mobile","Desktop"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <img src={Airbnd} alt='alt'/>
              <img src={Automattic} alt='alt'/>
              <img src={Godaddy} alt='alt'/>
              <img src={Nasdaq} alt='alt'/>
              <img src={Bissell} alt='alt'/>
              <img src={Microsoft} alt='alt'/>

            </Carousel>
          </div>
        </div>

</div>
      </Slide>
      <Slide style={{ ...baseStyle, background: '#d52685' }}>
        <h1>4</h1>
      </Slide>
      <Slide style={{ ...baseStyle, background: '#d52685' }}>
        <Footer />
      </Slide>

    </FullPage>
  );
}

export default Home