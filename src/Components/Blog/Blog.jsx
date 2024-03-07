import React, {useEffect} from 'react'
import './blog.css'

import { BsArrowRightShort } from "react-icons/bs";

import img from '../../Assets/image (2).jpg'
import img2 from '../../Assets/image (3).jpg'
import img3 from '../../Assets/image (4).jpg'
import img4 from '../../Assets/image (5).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts=[
  {
    id:1,
    postImage:img,
    title: 'Beutiful Morocco, let us travel!',
    desc: 'The kingdom of Morocco is a muslim countruy in wester north africa,with coastlines on the atlantic oacean and mediterranean sea.',
  },
  {
    id:2,
    postImage:img2,
    title: 'Beutiful ÑOOOOO, let us travel!',
    desc: 'The kingdom of Morocco is a muslim countruy in wester north africa,with coastlines on the atlantic oacean and mediterranean sea.',
  },
  {
    id:2,
    postImage:img3,
    title: 'Beutiful SERIO ?=, let us travel!',
    desc: 'The kingdom of Morocco is a muslim countruy in wester north africa,with coastlines on the atlantic oacean and mediterranean sea.',
  },
  {
    id:3,
    postImage:img4,
    title: 'Beutiful XD ZZZZ, Tu huevada',
    desc: 'The kingdom of Morocco is a muslim countruy in wester north africa,with coastlines on the atlantic oacean and mediterranean sea.',
  },

]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='blog container section' >
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500" >
            An insight to the incredible experince in the word.
          </p>
        </div>

        <div className="mainContainer grid">
          
          {
                Posts.map(({id,postImage,title,desc})=>{
                  return(
                  <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000" >
                     {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000" >{desc}</p>
                  </div>
                  <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                    Read More
                    <BsArrowRightShort className="icon"/>
                  </a>
              </div>
                 )
            })
          }


        </div>
      </div>
    </section>
  )
}

export default Blog;