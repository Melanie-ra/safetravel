import React, {useEffect} from 'react'
import './about.css'


import img from '../../Assets/customer.png'
import img2 from '../../Assets/mountain.png'
import img3 from '../../Assets/climbing.png'

import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          why hikings?
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well -being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well -being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img} alt="Image Name" />
            <h3>200+ Customer </h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well -being.
            </p>
          </div>


        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

              <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                <h2>Wonderful house experience in there!</h2>
                <p>
                  The adventure subraming is beased on an equally weighted average of scores from five country.
                </p>
              </div>
              <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                <video src={video} autoPlay loop muted typeof="video/mp4"></video>
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;