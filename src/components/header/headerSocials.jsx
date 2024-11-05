import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/ritikchhimwal' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://leetcode.com/ritikchhimwal/' target='_blank' rel="noreferrer"><SiLeetcode /></a>
        <a href='https://www.linkedin.com/in/ritik-chhimwal7/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.instagram.com/ritikchhimwal/' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default headerSocials;