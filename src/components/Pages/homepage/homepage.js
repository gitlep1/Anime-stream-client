import React from 'react'
import { Link } from 'react-router-dom'

import './homepage.scss'
import inuyashaImg from '../Inuyasha/inuyashaCover.jpg'

const homepage = () => (
  <div className='container-home'>
    <div className='homeBox'>
      <Link to='/Inuyasha'>
        <img width="400" height="400" src={inuyashaImg} className="inuyasha-img"></img>
      </Link>
    </div>
  </div>
)

export default homepage
