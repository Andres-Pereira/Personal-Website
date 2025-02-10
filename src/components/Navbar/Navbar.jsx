import React, {useState} from 'react'

import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { images } from '../../constants'//gracias al index creado solo se importa asi todo
//en lugar de tener que importar imagen por imagen
import './Navbar.scss'

//<!-- llama a la imagen como una funcion de la importacion images-- > 
//mapea el array de links y los muestra en el navbar
//abajo se encuentra la version movil que tendra un menu desplegable hecho con framer-motion animations
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className='app__navbar-logo'>
        <img src={images.logo1} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div></div>
          </li>))} 
      </ul>
      
      {/* Este es el hamburger menu */}
      <div className='app__navbar-hamburger'></div>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=> setToggle(true)}/>
          {toggle && (
            <motion.div
              style={{ opacity:0 }}
              whileInView = {{x: [300,0],opacity:[0.2,1]}}
              transition={{duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={()=> setToggle(false)}/>
                <ul>
                  {['Home', 'About', 'Projects', 'Experience' , 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                  </li>))} 
                </ul>
                

            </motion.div>
          )
            }

      </div>
    </nav>
  )
}

export default Navbar