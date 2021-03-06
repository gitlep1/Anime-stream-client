import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'

import backButton from './components/backButton'
import homepage from './components/Pages/homepage/homepage'
import animeList from './components/Pages/AnimeList/animelist'
import inuyasha from './components/Pages/Inuyasha/inuyasha'
import bleach from './components/Pages/Bleach/bleach'
import deathnote from './components/Pages/Deathnote/deathnote'
import dbz from './components/Pages/Dragonballz/dbz'
import hxh from './components/Pages/Hunterxhunter/hxh'
import naruto from './components/Pages/Naruto/naruto'
import onepiece from './components/Pages/Onepiece/op'
import yyh from './components/Pages/Yuyuhakusho/yyh'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact path='/sign-in' component={backButton} />
          <Route exact path='/' component={homepage} />
          <Route exact path="/Anime-list" component={animeList} />
          <Route path='/inuyasha/' component={inuyasha} />
          <Route path='/Bleach/' component={bleach} />
          <Route path='/Deathnote/' component={deathnote} />
          <Route path='/Dragonballz/' component={dbz} />
          <Route path='/Hunterxhunter/' component={hxh} />
          <Route path='/Naruto/' component={naruto} />
          <Route path='/Onepiece/' component={onepiece} />
          <Route path='/Yuyuhakusho/' component={yyh} />
        </main>
      </Fragment>
    )
  }
}

export default App
