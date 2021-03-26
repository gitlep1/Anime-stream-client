import React from 'react'
import { Link, Route } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { Player } from 'video-react'

import hxhPageImg from './hunterxhunterCover.jpg'
import './hxh.scss'
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

const hxhPage = () => (
  <div className="container-hxh">
    <Route exact path="/Hunterxhunter">
      <img src={hxhPageImg} className="hxhPageImg"></img>
      <p className="summary">
        Hunter x Hunter (2011) is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined.
        <br></br>
        Along the way to becoming an official Hunter, Gon befriends the lively doctor-in-training Leorio, vengeful Kurapika, and rebellious ex-assassin Killua. To attain their own goals and desires, together the four of them take the Hunter Exam, notorious for its low success rate and high probability of death. Throughout their journey, Gon and his friends embark on an adventure that puts them through many hardships and struggles. They will meet a plethora of monsters, creatures, and characters—all while learning what being a Hunter truly means.

      </p>
    </Route>
    <Route exact path="/Hunterxhunter/S1E1">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E1}
        />
        <div className="container-title">
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 1
          </p>
          <Link to ="/Hunterxhunter/" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E2" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E2">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E2}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 2
          </p>
          <Link to ="/Hunterxhunter/S1E1" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E3" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E3">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E3}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 3
          </p>
          <Link to ="/Hunterxhunter/S1E2" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E4" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E4">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E4}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 4
          </p>
          <Link to ="/Hunterxhunter/S1E3" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E5" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E5">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E5}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 5
          </p>
          <Link to ="/Hunterxhunter/S1E4" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E6" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E6">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E6}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 6
          </p>
          <Link to ="/Hunterxhunter/S1E5" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E7" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E7">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E7}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 7
          </p>
          <Link to ="/Hunterxhunter/S1E6" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E8" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E8">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E8}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 8
          </p>
          <Link to ="/Hunterxhunter/S1E7" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E9" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E9">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E9}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 9
          </p>
          <Link to ="/Hunterxhunter/S1E8" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E10" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter/S1E10">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E10}
        />
        <div>
          <p className="episodeTitle">
            Hunterxhunter Season 1 Episode 10
          </p>
          <Link to ="/Hunterxhunter/S1E9" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Hunterxhunter/S1E11" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Hunterxhunter">
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/Hunterxhunter/S1E1">Episode 1</Link><br/>
          <Link to="/Hunterxhunter/S1E2">Episode 2</Link><br/>
          <Link to="/Hunterxhunter/S1E3">Episode 3</Link><br/>
          <Link to="/Hunterxhunter/S1E4">Episode 4</Link><br/>
          <Link to="/Hunterxhunter/S1E5">Episode 5</Link><br/>
          <Link to="/Hunterxhunter/S1E6">Episode 6</Link><br/>
          <Link to="/Hunterxhunter/S1E7">Episode 7</Link><br/>
          <Link to="/Hunterxhunter/S1E8">Episode 8</Link><br/>
          <Link to="/Hunterxhunter/S1E9">Episode 9</Link><br/>
          <Link to="/Hunterxhunter/S1E10">Episode 10</Link><br/>
        </div>
      </NavDropdown>
    </Route>
  </div>
)

export default hxhPage
