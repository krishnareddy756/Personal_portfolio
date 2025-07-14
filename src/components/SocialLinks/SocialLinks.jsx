import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './SocialLinks.css';

export default function SocialLinks() {
  return (
    <div className="social-floating">
      <a href="https://github.com/krishnareddy756" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/krishna-reddy-ab8017275/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://leetcode.com/u/krishnareddy_22bce20126/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
      <a href="https://www.geeksforgeeks.org/user/krishnareddy_22bce20126/" target="_blank" rel="noopener noreferrer">
        <SiGeeksforgeeks />
      </a>
    </div>
  );
}
