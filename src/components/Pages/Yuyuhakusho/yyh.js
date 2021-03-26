import React from 'react'
import { Link, Route } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import { Player } from 'video-react'

import yyhPageImg from './yuyuhakushoCover.jpg'
import './yyh.scss'
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

const yyhPage = () => (
  <div className="container-yyh">
    <Route exact path="/Yuyuhakusho">
      <img src={yyhPageImg} className="yyhPageImg"></img>
      <p className="summary">
        One day, 14 year old Yusuke Urameshi suddenly finds himself dead, having died pushing a child out of the way of oncoming traffic. Since he has such a bad personality, even the Spirit World was caught by surpise that he would sacrifice himself. Yusuke soon finds out he wasn’t supposed to die and has a chance for resurrection and bringing his body back to life. After being resurrected, Yusuke becomes a Spirit Detective, along with his comrades, and one adventure after another happens, whether it be an investigation or a fighting tournament.
      </p>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E1">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E1}
        />
        <div className="container-title">
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 1
          </p>
          <Link to ="/Yuyuhakusho/" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E2" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E2">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E2}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 2
          </p>
          <Link to ="/Yuyuhakusho/S1E1" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E3" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E3">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E3}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 3
          </p>
          <Link to ="/Yuyuhakusho/S1E2" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E4" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E4">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E4}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 4
          </p>
          <Link to ="/Yuyuhakusho/S1E3" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E5" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E5">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E5}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 5
          </p>
          <Link to ="/Yuyuhakusho/S1E4" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E6" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E6">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E6}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 6
          </p>
          <Link to ="/Yuyuhakusho/S1E5" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E7" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E7">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E7}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 7
          </p>
          <Link to ="/Yuyuhakusho/S1E6" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E8" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E8">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E8}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 8
          </p>
          <Link to ="/Yuyuhakusho/S1E7" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E9" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E9">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E9}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 9
          </p>
          <Link to ="/Yuyuhakusho/S1E8" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E10" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho/S1E10">
      <div className="videoBox">
        <Player
          playsInline
          src={S1E10}
        />
        <div>
          <p className="episodeTitle">
            Yuyuhakusho Season 1 Episode 10
          </p>
          <Link to ="/Yuyuhakusho/S1E9" className="btn btn-dark previous">&lt;-PREVIOUS</Link>
          <Link to ="/Yuyuhakusho/S1E11" className="btn btn-dark next">NEXT-&gt;</Link>
        </div>
      </div>
    </Route>
    <Route exact path="/Yuyuhakusho">
      <NavDropdown title={
        <span className="season1Title">Season 1</span>
      }
      id="nav-dropdown"
      className="season1Dropdown">
        <div className="season1Episodes">
          <Link to="/Yuyuhakusho/S1E1">Episode 1</Link><br/>
          <Link to="/Yuyuhakusho/S1E2">Episode 2</Link><br/>
          <Link to="/Yuyuhakusho/S1E3">Episode 3</Link><br/>
          <Link to="/Yuyuhakusho/S1E4">Episode 4</Link><br/>
          <Link to="/Yuyuhakusho/S1E5">Episode 5</Link><br/>
          <Link to="/Yuyuhakusho/S1E6">Episode 6</Link><br/>
          <Link to="/Yuyuhakusho/S1E7">Episode 7</Link><br/>
          <Link to="/Yuyuhakusho/S1E8">Episode 8</Link><br/>
          <Link to="/Yuyuhakusho/S1E9">Episode 9</Link><br/>
          <Link to="/Yuyuhakusho/S1E10">Episode 10</Link><br/>
        </div>
      </NavDropdown>
    </Route>
  </div>
)

export default yyhPage
