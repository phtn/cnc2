import React, { Component } from 'react'

class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nav-bar">
        <nav className="ink-navigation">
          <ul className="menu horizontal black">
              <li className="nav-items"><a href="#">OFFICES</a></li>
              <li className="nav-items"><a href="#">CONDOS</a></li>
              <li className="nav-items"><a href="#">RESTAURANTS</a></li>
              <li className="nav-items"><a href="#">CLINICS</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
