import {Component} from 'react'

import {IoMdMenu} from 'react-icons/io'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    headerView: false,
  }

  toChangeHeaderView = () => {
    const {headerView} = this.state
    this.setState({
      headerView: !headerView,
    })
  }

  render() {
    const {headerView} = this.state

    return (
      <>
        <nav>
          <div className="nav-container">
            <h1 className="name-heading">Hemanth Jyothula</h1>
            <ul className="nav-ul">
              <Link className="nav-link" to="/">
                <h1>Home</h1>
              </Link>
              <Link className="nav-link" to="/about">
                <h1>About</h1>
              </Link>
            </ul>
            <ul className="lg-nav-ul">
              <button className="menu-btn" onClick={this.toChangeHeaderView}>
                <IoMdMenu className="menu-icon" />
              </button>
            </ul>
          </div>
          {headerView === true ? (
            <div className="mb-nav-items-container">
              <Link className="mb-home" to="/">
                <h1>Home</h1>
              </Link>
              <Link className="mb-about" to="/about">
                <h1>About</h1>
              </Link>
            </div>
          ) : null}
        </nav>
      </>
    )
  }
}
export default Header
