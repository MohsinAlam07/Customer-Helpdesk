import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div>
          <footer className="bg-black text-gray-300">

  {/* Top Footer */}
  <div className="footer sm:footer-horizontal max-w-7xl mx-auto p-10 gap-10">

    {/* Logo + Description */}
    <nav className="max-w-xs">
      <h2 className="text-white text-lg font-semibold">CS - Ticket System</h2>
      <p className="text-sm mt-3 text-gray-400">
       CS-Ticket System is a smart customer support ticket management platform designed to help teams track issues, manage requests, and resolve customer problems efficiently. Our goal is to simplify support workflows and improve service quality for every customer.
      </p>
    </nav>

    {/* Company */}
    <nav>
      <h6 className="footer-title text-white">Company</h6>
      <a className="link link-hover">About Us</a>
      <a className="link link-hover">Our Mission</a>
      <a className="link link-hover">Contact Sales</a>
    </nav>

    {/* Services */}
    <nav>
      <h6 className="footer-title text-white">Services</h6>
      <a className="link link-hover">Products & Services</a>
      <a className="link link-hover">Customer Stories</a>
      <a className="link link-hover">Download Apps</a>
    </nav>

    {/* Information */}
    <nav>
      <h6 className="footer-title text-white">Information</h6>
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Terms & Conditions</a>
      <a className="link link-hover">Join Us</a>
    </nav>

    {/* Social Links */}
    <nav>
      <h6 className="footer-title text-white">Social Links</h6>
     
      <a className="link link-hover">   <FontAwesomeIcon icon={faTwitter} /> CS-Ticket System</a>
      <a className="link link-hover"> <FontAwesomeIcon icon={faGithub} /> CS-Ticket System</a>
      <a className="link link-hover"><FontAwesomeIcon icon={faWhatsapp} /> support@cst.com</a>
    </nav>

  </div>

  {/* Bottom Copyright */}
  <div className="border-t border-gray-700 text-center py-4 text-sm">
    © 2025 CS - Ticket System. All rights reserved.
  </div>

</footer>
        </div>
    );
};

export default Footer;