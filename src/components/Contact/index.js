import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProfilePic from '../../assets/images/profil.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am looking for a job as a Frontend developer or anything related to UI/UX. I'm a fast learner with great team skills. You can contact me via my email, phone or on my LinkedIn account attached down below.
          </p>
          <div className="contact-form">
            {/* <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> */}
          
          </div>



          <div className='contact-info'>
          <FontAwesomeIcon icon={faEnvelope} className="icons" size="2x" />
          <a href="mailto:dobie.bianca16@gamil.com" className='contact-text' target="_blank">dobie.bianca16@gmail.com </a>
          </div>

          <div className='contact-info'>
          <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
          <a href="https://www.linkedin.com/in/bianca-dobie-05323a19a/" className='contact-text' target="_blank">LinkedIn</a>
          </div>

          <div className='contact-info'>
          <FontAwesomeIcon icon={faPhone} className="icons" size="2x" />
          <span  className='contact-text' >+40 (746) 060 461</span>
          </div>




        </div>
        
        <div className="imag">
          <img src={ProfilePic} alt="profile picture Bianca"/>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact