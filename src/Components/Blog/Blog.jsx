import React from 'react'
import './blog.css'

import { BsArrowRightShort } from "react-icons/bs";

import img from '../../Assets/image (2).jpg'
import img2 from '../../Assets/image (3).jpg'
import img3 from '../../Assets/image (4).jpg'
import img4 from '../../Assets/image (5).jpg'

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
  return (
    <section className='blog container section' >
      <div className="secContainer">

        <div className="secIntro">
          <h2 className='secTitle'>
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experince in the word.
          </p>
        </div>

        <div className="mainContainer grid">
          
          {
                Posts.map(({id,postImage,title,desc})=>{
                  return(
                  <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>
                     {title}
                    </h3>
                    <p>{desc}</p>
                  </div>
                  <a href="#" className="flex">
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