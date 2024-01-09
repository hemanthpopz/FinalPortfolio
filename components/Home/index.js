import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaArrowAltCircleUp} from 'react-icons/fa'

import Typed from 'react-typed'
import MyImage from '../Images/MyImage.png'
import ECom from '../Images/MainECom.jpg'
import JobSearch from '../Images/JobSearch.jpg'

import FoodImage from '../Images/FoodImage.jpg'

import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="content-container">
          <div className="home-text-container">
            <h2 className="profession">Full Stack Developer</h2>
            <h1 className="intro">
              Hello, my name is{' '}
              <span className="my-name">Hemanth Jyothula</span>
            </h1>
            <p className="home-des">
              I am Trainee In CCBP NXTWAVE Online Training Platform, And I am
              Proficient In
              <span className="home-profession">
                <Typed
                  strings={['Frontend', 'Backend', 'DBMS', 'Full Stack']}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </span>{' '}
              <br />
              And There Modern FrameWorks
            </p>
            <div className="buttons-container">
              <a href="#project-container">
                <button className="projects-button">Projects</button>
              </a>
              <Link to="/about">
                <button className="about-btn">About</button>
              </Link>
            </div>
          </div>
          <div className="profile-container">
            <div className="photo-container">
              <img src={MyImage} className="my-image" />
            </div>
          </div>
        </div>
        <div className="project-container">
          <h1 id="project-container" className="project-heading">
            Projects
          </h1>
          <div className="project1">
            <div className="project1-text-container">
              <h1 className="each-project-heading">E-Commerce Website</h1>
              <p className="each-project-des">
                Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST
                API Calls, Local Storage, JWT Token, Authorization,
                Authentication Created a modern e-commerce experience with a
                design inspired by Amazon and Flipkart.
              </p>
              <a rel="noreferrer" target="_blank" href="https://myec.ccbp.tech">
                <button className="each-project-btn">View Project</button>
              </a>
            </div>
            <div className="each-project-image-container">
              <img className="each-project-image" src={ECom} />
            </div>
          </div>

          <div className="project1">
            <div className="each-project-image-container">
              <img className="each-project2-image" src={JobSearch} />
            </div>
            <div className="project1-text-container">
              <h1 className="each-project-heading">Job Search Website</h1>
              <p className="each-project-des">
                Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST
                API Calls, Local Storage, JWT Token, Authorization,
                Authentication Implemented Jobby App where users can log in and
                can see a list of jobs with search by Job title, filters based
                on Salary range and Employment type, etc
              </p>
              <a rel="noreferrer" target="_blank" href="https://njp.ccbp.tech">
                <button className="each-project-btn">View Project</button>
              </a>
            </div>
          </div>

          <div className="project1">
            <div className="project1-text-container">
              <h1 className="each-project-heading">FoodOrder Website</h1>
              <p className="each-project-des">
                Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST
                API Calls, Local Storage, JWT Token, Authorization,
                Authentication Created a modern Food Order experience with a
                design inspired by Swiggy and Zomato.
              </p>
              <a rel="noreferrer" target="_blank" href="https://ntkw.ccbp.tech">
                <button className="each-project-btn">View Project</button>
              </a>
            </div>
            <div className="each-project-image-container">
              <img className="each-project-image" src={FoodImage} />
            </div>
          </div>
        </div>

        <p className="footer-name">Hemanth Jyothula</p>
      </div>
    )
  }
}

export default Home
