import React from 'react'
import './popular.css'

import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from "react-icons/bs";


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
              <div className="singleDestination">
                <div className="destImage">

                  <img src="" alt="Image title" />
                  
                  <div className="overlayInfo">
                    <h3>Some text</h3>
                    <p>
                      Lorem ipsum dolor sit amet.
                    </p>

                    <BsArrowRightShort  className='icon'/>
                  </div>

                </div>
                <div className="destFooter">
                  <div className="number">
                    01
                  </div>
                  <div className="destText flex">
                      <h6>
                        London
                      </h6>
                      <span className='flex'>
                        <span className="dot">
                        <BsDot className="icon" />
                        </span>
                      </span>
                  </div>
                </div>
              
              </div>

          </div>

      </div>
    </section>
  )
}

export default Popular;