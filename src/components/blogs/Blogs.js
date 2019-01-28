import React, { Component } from 'react'
import { Consumer } from '../context'

// Components
import BlogItem from './BlogItem';
import Sidebar from '../layouts/Sidebar';

export default class Blogs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { blogs } = value;
          return (
            <React.Fragment>
            <div className="columns">
              <div className="column is-8">
                {blogs.map(blog => 
                  <BlogItem 
                    key  = { blog.id }
                    blog = { blog }
                  />)}
              </div>
              <div className="column is-4">
                <Sidebar />
              </div>
            </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}