import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar>
      <Container>
        <Nav>
          <Navbar.Brand>Eric Asato</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link href="#about"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >About Me</Nav.Link>
          <Nav.Link href="#project"
            onClick={() => handlePageChange('Project')}
            // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>Project</Nav.Link>
          <Nav.Link href="#blog"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</Nav.Link>
          <Nav.Link href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
