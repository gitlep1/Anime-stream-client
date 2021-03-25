import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'

import './inuyasha.scss'
import S1E1 from './Episodes/S1E1.mp4'

const inuyashaPage = () => (
  <div className="container-inuyasha">
    <div className="videoBox">
      <Player
        playsInline
        src={S1E1}
      />
    </div>
  </div>
)

export default inuyashaPage
