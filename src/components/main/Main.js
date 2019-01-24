import React, { Component } from 'react'

// Components
import Blogs from './blogs/Blogs';
import Sidebar from './Sidebar';
import Blog from './blogs/Blog';
// Style
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="columns">
        {/* <div className="column is-8">
          <Blogs />
        </div>
         */}
        <div className="column is-8">
          <Blog />
        </div>
        <div className="column">
          <Sidebar />
        </div>
      </div>
    )
  }
}
