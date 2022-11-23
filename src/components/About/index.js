import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          
          <span className="section-tag">&lt;education&gt;</span>
          <ul className='about-ul'>
            <li>Liceul Teoretic Negresti-Oas | 2014-2018</li>
            <li>FSEGA | Bachelor's Degree | Business Information Systems | 2018-2021 </li>
            <li>FMI | Master's Degree | Software Engineering | 2021-2023 </li>
                    
          </ul>
          <span className="section-tag">&lt;/education&gt;</span>


          <span className="section-tag">&lt;courses&gt;</span>
          <ul className='about-ul'>
                    <li><a href="https://www.freecodecamp.org/certification/dobiebianca/responsive-web-design" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    freeCodeCamp Responsive Web Design </li>
                    <li><a href="https://coursera.org/share/14c4e652c0ec843c253bca41e3756ef3" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    Google UX Design: Build Wireframes and Low-Fidelity Poototypes</li>
                    <li><a href="https://coursera.org/share/ff8298c41021ecf98e17fabd21b592b3" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    Google UX Design: Start the UX Design Process: Empathize, Define, and Ideate</li>
                    <li><a href="https://coursera.org/share/633de0ed42f8b33f03dead88f5677692" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    Google UX Design: Foundation of User Experience</li>
                    <li><a href="" target='_blank'><FontAwesomeIcon icon={faLink} /></a>ECDL</li>
                  </ul> 
          <span className="section-tag">&lt;/courses&gt;</span>
       
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
