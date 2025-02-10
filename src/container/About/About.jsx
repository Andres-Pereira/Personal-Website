import React, {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import {urlFor,client} from '../../client'
import './About.scss'
import {AppWrap, MotionWrap} from '../../wrapper'
//array de objetos con la informacion de la seccion about, datos estaticos hardcodeados sin sanity
// const abouts =[
//   {title:'Web Development', description:'I have experience building websites', imgUrl:images.about01},
//   {title:'Web Design', description:'I have experience building websites', imgUrl:images.about02},
//   {title:'Backend', description:'I have experience building websites', imgUrl:images.about03},
//   {title:'API', description:'I have experience building websites', imgUrl:images.about04}
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {

    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    })

  }, []);

  return (
    <>
      <h2 className='head-text'> 
        Some information  
        <br />
        <span> about </span>
        myself
        </h2>
        <div className='app__profiles'>
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              key={about.title + index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type:'tween'}}
              className='app__profile-item'
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10, textAlign:'center'}}>{about.description}</p>
            </motion.div>
          ))}

        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'About',
  "app__whitebg"
);