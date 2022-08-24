import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
function NavBarCom() {
  return (
    <Navbar sticky='top' bg='danger' variant='dark'>
        <Container>
            <Navbar.Brand href='#home'>Contact Form</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default NavBarCom