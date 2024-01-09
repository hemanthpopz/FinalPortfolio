import {FaLinkedin, FaEnvelope, FaWhatsapp} from 'react-icons/fa'
import {Component} from 'react'
import MyPDF from '../Images/MyResume.pdf'
import Header from '../Header'
import MyImage from '../Images/MyImage.png'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Header />
        <div className="about-content-container">
          <div className="about-text-container">
            <h1 className="about-heading">About Me</h1>
            <p className="about-des">
              I am a web developer with a vast array of knowledge in many
              different front end and back end languages, responsive frameworks,
              databases, and best code practices. My objective is simply to be
              the best web developer that I can be and to contribute to the
              technology industry all that I know and can do
            </p>
            <div className="about-buttons-container">
              {' '}
              <a href={MyPDF} target="_blank" rel="noreferrer">
                <button className="resume-btn">Resume</button>
              </a>
              <a href="#contact-heading" rel="noreferrer">
                <button className="contact-btn">Contact</button>
              </a>
            </div>
          </div>

          <div className="profile-container ">
            <div className="photo-container about-photo-container">
              <img src={MyImage} className="my-image" />
            </div>
          </div>
        </div>

        <div className="contact-container">
          <h1 id="contact-heading" className="contact-heading">
            Contact
          </h1>
          <div className="contact-logo-container">
            <a
              target="_blank"
              href="www.linkedin.com/in/hemanth-jyothula-513561293"
            >
              <div className="contact1">
                <FaLinkedin className="icon" />
                <h1 className="icon-name">Hemanth Jyothula</h1>
              </div>
            </a>
            <div className="contact1">
              <FaEnvelope className="icon" />
              <h1 className="icon-name">Hemanthjyothula1@gmail.com</h1>
            </div>
            <div className="contact1">
              <FaWhatsapp className="icon" />
              <h1 className="icon-name">6304951199</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
