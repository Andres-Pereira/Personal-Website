import React from 'react'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
          <div style={{alignItems:'center'}}>
          <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/andrés-pereira-cossio-b86981275" alt="linkedin">
            <BsLinkedin/>
          </a>

          </div>
  
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Andres-Pereira" alt="github">
            <BsGithub />
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/andypereira.c/" alt="instagram">
            <BsInstagram/>
          </a>
            
        </div>
    </div>
  )
}

export default SocialMedia