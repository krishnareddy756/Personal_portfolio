import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Krishna Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
