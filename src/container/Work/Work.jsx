import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client';
import './Work.scss'

const Work = () => {
  //estados de animaciones y de filtros de la seccion
  const [activeFilter, setactiveFilter] = useState('Portfolio');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  //useEffect para fetch de datos
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data)=>{
      setWorks(data);
      setFilterWork(data);
    })
  }, [])

  //filter function
  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setAnimateCard([{y: 100, opacity:0}]);
    setTimeout(() => {
      setAnimateCard([{y: 0, opacity:1}]);
    
      setFilterWork(works.filter((work=> work.tags.includes(item))));
      if(item !='Portfolio')
      {
        setFilterWork(works.filter((work=> work.tags.includes(item))));
      }
      

    }, 500);
  }

  return (
    <>
      <h2 className='head-text'> 
        My 
        <span> Portfolio, </span>
        <br />
        <span>Projects</span> I've worked on 
      </h2>
      {/* filters
      <div className="app__work-filter">
        {['Portfolio', 'Academic Background'].map((item, index)=>(
          <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}>
          {item}  
          </div>
        ))}
      </div> */}
      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio">
        {filterWork.map((work, index) =>(
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src= {urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
              whileHover={{opacity: [0, 1]}}
              transition={{duration:0.25, ease:'easeInOut', staggerChildren: 0.5}}
              className="app__work-hover app__flex">

                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div 
                  whileInView={{scale:[0,1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration:0.25}}
                  className="app__flex">

                    <AiFillEye />

                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div 
                  whileInView={{scale:[0,1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration:0.25}}
                  className="app__flex">

                    <AiFillGithub />

                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop:10}}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>

            </div>

          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'Projects',
  "app__primarybg"
);