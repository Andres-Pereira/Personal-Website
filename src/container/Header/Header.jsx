import React from 'react'
//animations
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'
// un objeto de propiedades que definen una animacion en framer motion
// aqui importamos el appwrap para implementar los componentes reusados de social y dots
import {AppWrap} from '../../wrapper'
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    //este div es un hero component, es decir agruapa un grupo de componentes
    //while in view indica que se animara desde un valor negativo a la izquierda -100 y la opacidad de nada visible
    //hasta 1 que es completamente visible
    <div className="app__header app__flex">
      <motion.div whileInView={{ x: [-100, 0], opacity:[0,1]}} 
      transition={{duration: 0.5}} className="app__header-info">

        <div className="app__header-badge"> 
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}} >
              <p className='p-text'>Hello! My name is</p>
              <h1 className='head-text'>Andrés</h1>
            </div>

          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Systems Engineer</p>
            <p className='p-text'>Jr. Full-Stack Developer</p>
            {/* <p className='p-text'>Junior Level</p> */}
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{opacity:[0,1]}} 
      transition={{duration: 0.5, delayChildren: 0.5}} className="app__header-img">

        <img src={images.pro2} alt="profile_bg" />

        <motion.img whileInView={{scale:[0,1]}} 
        transition={{duration: 1, ease: 'easeInOut'}}  
        src={images.circle} alt="profile_circle" className="overlay_circle"/>

      </motion.div>

      <motion.div variant={scaleVariants}
      whileInView={scaleVariants.whileInView} className="app__header-circles">

        {[images.spring, images.web, images.csharp].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
            </div>
        ))}

      </motion.div>
    </div>
  )
}
//Aqui usamos el wrap pasando el componente actual y especificando la seccion nav dots
export default AppWrap(Header, 'Home');