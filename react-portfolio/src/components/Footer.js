import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
    <ul className="footer footer-tabs">
      <li className="footer-item">
        <a
          href="#about"
          onClick={() => handlePageChange('')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          GITHUB
        </a>
      </li>
    </ul>
  );
}

export default Footer;
