import React from 'react'
import './popular.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from "react-icons/bs";

import img from '../../Assets/image (1).jpg'
import img2 from '../../Assets/image (21).jpg'
import img3 from '../../Assets/image (41).jpg'
import img4 from '../../Assets/image (51).jpg'
import img5 from '../../Assets/image (61).jpg'
import img6 from '../../Assets/image (71).jpg'
import img7 from '../../Assets/image (81).jpg'

const Data = [
  {
    id:1,
    imgSrc: img2,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURA RELAX',

  },
  {
    id:2,
    imgSrc: img3,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURA RELAX',

  },
  {
    id:3,
    imgSrc: img4,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURA RELAX',

  },
  {
    id:4,
    imgSrc: img5,
    destTitle:'Machu Picchu',
    location:'Peru',
    grade:'CULTURA RELAX',

  },
]

const Popular = () => {
  return (
    <section className='popular section container' style={ {paddingTop: "15rem"}}>
      <div className="secContainer">

          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">
                Popular Destination</h2>
              <p>From Historical cities to natural sectaculars, come see the best of the world!</p>
            </div>
        
            <div className="iconsDiv flex">
                <BsArrowLeftShort className="icon leftIcon"/>
                <BsArrowRightShort className="icon"/>
            </div>
          </div>

          <div className="mainContent grid">
              {
                Data.map(({id,imgSrc,destTitle,location,grade})=>{
                  return(
                    <div className="singleDestination">
                    <div className="destImage">
    
                      <img src={imgSrc} alt="Image title" />
                      
                      <div className="overlayInfo">
                        <h3>{destTitle}</h3>
                        <p>
                          {location}
                        </p>
    
                        <BsArrowRightShort  className='icon'/>
                      </div>
    
                    </div>
                    <div className="destFooter">
                      <div className="number">
                        0{id}
                      </div>
                      <div className="destText flex">
                          <h6>
                            {location}
                          </h6>
                          <span className='flex'>
                            <span className="dot">
                              <BsDot className="icon" />
                            </span>
                            Dot
                          </span>
                      </div>
                    </div>
                  
                  </div>
                  )
                })
              }
              
              


          </div>

      </div>
    </section>
  )
}

export default Popular;