import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/tatyana-simchenko/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/TatyanaSimchenko' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://www.facebook.com/tetianasymchenko' target="_blank" rel="noreferrer"><BsFacebook/></a>
      
    </div>
  )
}

export default HeaderSocials
