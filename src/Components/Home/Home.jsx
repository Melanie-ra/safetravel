import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        
        <div className="homeText">

          <h1 className="title">
            Plan Your Trip With Travel DoT
          </h1>

          <p className="subTitle">
            Travel to your favorite city with respectful of the enviroment!
          </p>
          <button className='btn'>
            <a href="#">Explorer Now</a>
          </button>
        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='DreamDestination'/>
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder='11/Meters'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder='$1400 la hora xd'/>
          </div>
          <button className='btn'>
            Search
          </button>


        </div>

      </div>
    </section>
  )
}

export default Home;