import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'

import Title from './title'
import Nav from './nav'
import LeftSideBar from './left'
import MiddleSection from './mid'
import RightSideBar from './right'


export default class App extends Component {
  constructor(props) {
    super(props)
  }
render () {
    return (
      <div>
        <Title brand="click 'n clean" />
        <Nav title='-'/>
        <div className="ink-grid">
        <div className="column-group">
          <div className="all-100">
            <MiddleSection />
          </div>

          </div>
        </div>
      </div>
    )
  }
}
render(<App />, document.getElementById('container'))
