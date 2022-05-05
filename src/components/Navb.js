import React from 'react';
import {NavDropdown,Nav} from 'react-bootstrap';


  const Navb = () => {
  return (
    <div>
 


 <div className=' navbar bg-secondary  rounded ' >
  Market
        <Nav.Link href='/' > Home </Nav.Link>
        <NavDropdown title="Contact Us" id="basic-nav-dropdown">
          <NavDropdown.Item >mahaznm98@gmail.com</NavDropdown.Item>
          <NavDropdown.Item href="https://www.facebook.com/mohammed.abomosa.5/">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/mohammed-abo-mosa-4213bb1b0/">linkedin</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='/About' > About Us </Nav.Link>
          <Nav.Link href='/Sign' > Sign </Nav.Link>
  </div>

  </div>
  )
}
export default Navb;