/**
 *
 * Footer
 *
 */

import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} BCO || career-olympiad-bangladesh</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
