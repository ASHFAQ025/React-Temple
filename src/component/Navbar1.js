import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <div>
 <Navbar className='navbar-dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-uppercase ">Home</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">investment</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">widthdraw</Nav.Link>
            <Nav.Link href="#link" className="text-uppercase">referral</Nav.Link>
         
            
          </Nav>
          <div className="nav_btn">
           <button className='me-3 text-uppercase'>telegram</button>
            <button className='text-uppercase'>whitepaper</button>
           </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1