import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
      <footer>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="https://github.com/ejasato">GITHUB</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="https://www.linkedin.com/in/eric-asato-567167263/">LinkedIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Twitter</Nav.Link>
          </Nav.Item>
        </Nav>
      </footer>
  );
}

export default Footer;
