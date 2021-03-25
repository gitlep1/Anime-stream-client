import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
import { Navbar, Nav } from 'react-bootstrap'

import './Header.scss'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/" className="btn btn-light">Home</Nav.Link>
    <Nav.Link href="#/Anime-list" className="btn btn-warning">Anime List</Nav.Link>
    <Nav.Link href="https://gitlep1.github.io/streaming-client/#/" target='_blank' rel="noopener noreferrer" className="btn btn-danger">Cartoons</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" expand="md" id="navbar">
    <Navbar.Brand href="#">
      <h3 className="navbarTitle">Anime Stream</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {/* { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>} */}
        { alwaysOptions }
        {/* { user ? authenticatedOptions : unauthenticatedOptions } */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

window.onscroll = function () { scrollFunction() }

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '0'
  }
}

export default Header
