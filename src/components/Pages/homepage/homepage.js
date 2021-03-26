import React from 'react'
import { Link } from 'react-router-dom'

import './homepage.scss'
import inuyashaImg from '../Inuyasha/inuyashaCover.jpg'
import bleachImg from '../Bleach/bleachCover.png'
import deathnoteImg from '../Deathnote/deathnoteCover.webp'
import dragonballzImg from '../Dragonballz/dragonballzCover.jpg'
import hunterxhunterImg from '../Hunterxhunter/hunterxhunterCover.jpg'
import narutoImg from '../Naruto/narutoCover.jpg'
import onepieceImg from '../Onepiece/onepieceCover.jpg'
import yuyuhakushoImg from '../Yuyuhakusho/yuyuhakushoCover.jpg'

const homepage = () => (
  <div className='container-home'>
    <div className='homeBox'>
      <Link to='/Inuyasha'>
        <img src={inuyashaImg} className="cover-img"></img>
      </Link>
      <Link to='/Bleach'>
        <img src={bleachImg} className="cover-img"></img>
      </Link>
      <Link to='/Deathnote'>
        <img src={deathnoteImg} className="cover-img"></img>
      </Link>
      <Link to='/Dragonballz'>
        <img src={dragonballzImg} className="cover-img"></img>
      </Link>
      <Link to='/Hunterxhunter'>
        <img src={hunterxhunterImg} className="cover-img"></img>
      </Link>
      <Link to='/Naruto'>
        <img src={narutoImg} className="cover-img"></img>
      </Link>
      <Link to='/Onepiece'>
        <img src={onepieceImg} className="cover-img"></img>
      </Link>
      <Link to='/Yuyuhakusho'>
        <img src={yuyuhakushoImg} className="cover-img"></img>
      </Link>
    </div>
  </div>
)

export default homepage
