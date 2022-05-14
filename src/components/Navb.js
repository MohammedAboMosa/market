import React from 'react';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';


  const Navb = () => {
  return (
    <Navbar>
 


  <h1>Market</h1>
        <Nav.Link href='/Home' > Home </Nav.Link>
        <Nav.Link href='/ShowItem' > Show Item </Nav.Link>
        <Nav.Link href='/Sign' > Sign </Nav.Link>
        <Nav.Link href='/About' > About Us </Nav.Link>
          <NavDropdown title="Contact Us" id="basic-nav-dropdown">
          <NavDropdown.Item >mahaznm98@gmail.com</NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/mohammed.abomosa.5/">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/mohammed-abo-mosa-4213bb1b0/">linkedin</NavDropdown.Item>
          </NavDropdown>

  </Navbar>
  )
}
export default Navb;