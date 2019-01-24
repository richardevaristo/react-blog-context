import React, { Component } from 'react'

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
                    <li><a>Blog post 1</a></li>
                    <li><a>Blog post 2</a></li>
                    <li><a>Blog post 3</a></li>
                    <li><a>Blog post 4</a></li>
                    <li><a>Blog post 5</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
