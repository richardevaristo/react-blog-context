import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div className="block">
        <div className="card">
            <div className="card-content">
                <p className="title">
                    Recent Posts
                </p>
                <ul>
                    {blogs.map(blog => 
                      <li key={blog.id}>{blog.title}</li>
                    )}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
