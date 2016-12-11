import React from 'react'

const LeftSideBar = ({sidebar}) => {
    return (
      <div className="left-div">
        <div className="ink-navigation">
          <ul className="dropdown">
              <li className="heading">Browse</li>
              <li><a href="#">Back</a></li>
              <li><a href="#">Forward</a></li>
              <li className="heading separator-above">Clipboard</li>
              <li><a href="#">Copy</a></li>
              <li><a href="#">Cut</a></li>
              <li><a href="#">Paste</a></li>
              <li className="heading">Screenshot</li>
              <li className="submenu separator-above">
                  <a href="#">Options</a>
                  <ul className="dropdown">
                      <li><a href="#">Whole screen</a></li>
                      <li><a href="#">Portion of screen</a></li>
                  </ul>
              </li>
          </ul>
        </div>
      </div>
    )
  }
export default LeftSideBar
