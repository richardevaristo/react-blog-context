import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
            <div className="nav-left">
                <div className="block">
                    <a href="#" className="nav-item">
                        Blog
                    </a>
                </div>
            </div>
            <div className="nav-right nav-menu">
                <a href="#" class="nav-item">Home</a>
                <a href="#" class="nav-item">About Us</a>
                <a href="#" class="nav-item">Blog</a>
            </div>
        </nav>
      </div>
    )
  }
}
