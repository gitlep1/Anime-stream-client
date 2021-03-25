import React from 'react'
// import { Link } from 'react-router-dom'
import { Player } from 'video-react'

import './inuyasha.scss'
import '../../videoplayer.scss'
import S1E1 from './Episodes/S1E1.mp4'

const inuyashaPage = () => (
  <div className="container-inuyasha">
    <div className="videoBox">
      <Player
        playsInline
        src={S1E1}
      />
      <div>
        <p className="episodeTitle">
          Inuyasha Season 1 Episode 1
        </p>
      </div>
    </div>
  </div>
)

export default inuyashaPage
