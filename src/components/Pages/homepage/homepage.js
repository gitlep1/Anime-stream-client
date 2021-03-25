import React from 'react'
import { Link } from 'react-router-dom'

import './homepage.scss'

const homepage = () => (
  <div className='container-home'>
    <div className='homeBox'>
      <Link to='/Inuyasha' className='inuyasha-img'>lol</Link>
    </div>
  </div>
)

export default homepage
