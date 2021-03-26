import React from 'react'
import { Link, Route } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { Player } from 'video-react'

import deathnotePageImg from './deathnoteCover.webp'
import './deathnote.scss'
import '../../videoplayer.scss'
import S1E1 from './Episodes/S1E1.mp4'
import S1E2 from './Episodes/S1E2.mp4'
import S1E3 from './Episodes/S1E3.mp4'
import S1E4 from './Episodes/S1E4.mp4'
import S1E5 from './Episodes/S1E5.mp4'
import S1E6 from './Episodes/S1E6.mp4'
import S1E7 from './Episodes/S1E7.mp4'
import S1E8 from './Episodes/S1E8.mp4'
import S1E9 from './Episodes/S1E9.mp4'
import S1E10 from './Episodes/S1E10.mp4'

const deathnotePage = () => (
  <div className="container-deathnote">
    <Route exact path="/Deathnote">
      <img src={deathnotePageImg} className="deathnotePageImg"></img>
      <p className="summary">
        Light Yagami is an ace student with great prospects, who’s bored out of his mind. One day he finds the “Death Note”: a notebook from the realm of the Death Gods, with the power to kill people in any way he desires. With the Death Note in hand, Light decides to create his perfect world, without crime or criminals. However, when criminals start dropping dead one by one, the authorites send the legendary detective L to track down the killer, and a battle of wits, deception and logic ensues.
      </p>
    </Route>
    <Route exact path="/Deathnote/S1E1">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E1}
        />
        <div className="container-title">
          <p className="episodeTitle">
            Deathnote Season 1 Episode 1
          </p>
          <Link to ="/Deathnote/" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E2" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E2">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E2}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 2
          </p>
          <Link to ="/Deathnote/S1E1" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E3" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E3">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E3}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 3
          </p>
          <Link to ="/Deathnote/S1E2" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E4" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E4">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E4}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 4
          </p>
          <Link to ="/Deathnote/S1E3" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E5" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E5">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E5}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 5
          </p>
          <Link to ="/Deathnote/S1E4" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E6" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E6">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E6}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 6
          </p>
          <Link to ="/Deathnote/S1E5" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E7" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E7">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E7}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 7
          </p>
          <Link to ="/Deathnote/S1E6" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E8" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E8">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E8}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 8
          </p>
          <Link to ="/Deathnote/S1E7" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E9" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E9">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E9}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 9
          </p>
          <Link to ="/Deathnote/S1E8" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E10" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote/S1E10">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E10}
        />
        <div>
          <p className="episodeTitle">
            Deathnote Season 1 Episode 10
          </p>
          <Link to ="/Deathnote/S1E9" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Deathnote/S1E11" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Deathnote">
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/Deathnote/S1E1">Episode 1</Link><br/>
          <Link to="/Deathnote/S1E2">Episode 2</Link><br/>
          <Link to="/Deathnote/S1E3">Episode 3</Link><br/>
          <Link to="/Deathnote/S1E4">Episode 4</Link><br/>
          <Link to="/Deathnote/S1E5">Episode 5</Link><br/>
          <Link to="/Deathnote/S1E6">Episode 6</Link><br/>
          <Link to="/Deathnote/S1E7">Episode 7</Link><br/>
          <Link to="/Deathnote/S1E8">Episode 8</Link><br/>
          <Link to="/Deathnote/S1E9">Episode 9</Link><br/>
          <Link to="/Deathnote/S1E10">Episode 10</Link><br/>
        </div>
      </NavDropdown>
    </Route>
  </div>
)

export default deathnotePage
