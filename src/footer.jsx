import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white p-4 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="mb-0">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
