import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="block">
        <div className="card">
            <div className="card-content">
                <p className="title">
                    Recent Posts
                </p>
                <ul>
                    <li><Link to="/blog/:name">Blog post 1</Link></li>
                    <li><Link to="/blog/:name">Blog post 2</Link></li>
                    <li><Link to="/blog/:name">Blog post 3</Link></li>
                    <li><Link to="/blog/:name">Blog post 4</Link></li>
                    <li><Link to="/blog/:name">Blog post 5</Link></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
