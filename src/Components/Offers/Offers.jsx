import React from 'react'
import './offers.css'

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img from '../../Assets/image (81).jpg'

import img1 from '../../Assets/image (91).jpg'
import img2 from '../../Assets/image (71).jpg'
import img3 from '../../Assets/image (61).jpg'

const Offer=[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Angkor Wat',
    location: 'Ucrania',
    price: '$7.400',
  },
  {
    id:2,
    imgSrc: img1,
    destTitle: 'Angkor nel',
    location: 'Peru',
    price: '$1.400',
  },
  {
    id:3,
    imgSrc: img2,
    destTitle: 'Angkor one',
    location: 'Cambodia',
    price: '$4.400',
  },
  
]

const Offers = () => {
  return (
    <section className='offer container section' >
      <div className="secContainer">
        
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
          {
            Offer.map(({id,imgSrc,destTitle,location,price})=>{
              return(
                <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">
                    30% Off
                  </span>
                </div>
    
                <div className="offerBody">
                  <div className="price flex">
                    <h4>
                      {price}
                    </h4>
                    <span className="status">
                      For Rent
                    </span>
                  </div>
    
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon"/>
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon"/>
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi  className="icon"/>
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle  className="icon"/>
                      <small>Shuttle</small>
                    </div>
                  </div>
    
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {location} </small>
                  </div>
    
                  <button className='btn flex'>
                    View Details
                    <BsArrowRightShort className="icon"/>
                  </button>
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

export default Offers;