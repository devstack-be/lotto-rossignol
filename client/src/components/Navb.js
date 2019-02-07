import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink as RouterNavLink, withRouter } from 'react-router-dom'

const Navb = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="mt-1">
        <Navbar.Brand as={Link} exact to="/">Lotto Rossignol</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={RouterNavLink} exact={true} to="/" >Résultats</Nav.Link>
            <Nav.Link as={RouterNavLink} exact={true} to="/drawings" >Tirages</Nav.Link>
            <Nav.Link as={RouterNavLink} exact={true} to="/about">A propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default withRouter(Navb)