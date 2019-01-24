import React, { Component } from 'react'

export default class BlogItem extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="box">
            <h1 className="title">Blog Post 1</h1>
            <h2 className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quisquam architecto consectetur eveniet alias voluptatibus libero tempore pariatur, ratione provident voluptates. Nostrum aut veniam qui.
            </h2>
            <nav className="level">
                <div className="level-left">
                    <p className="level-item">
                        <a href="#" className="blogPostLinkStyles">
                            <i className="fa fa-user blogPostLinkIconStyles"></i> {' '}
                            Richard Evaristo
                        </a>
                    </p>
                    <p className="level-item">
                        <a href="#" className="blogPostLinkStyles">
                            <i className="fa fa-calendar blogPostLinkIconStyles"></i> {' '}
                            January 21, 2019
                        </a>
                    </p>
                    <p className="level-item">
                        <a href="#" className="blogPostLinkStyles">
                            <i className="fa fa-list-alt blogPostLinkIconStyles"></i> {' '}
                            Category 1
                        </a>
                    </p>
                    <p className="level-item">
                        <a href="#" className="blogPostLinkStyles">
                            <i className="fa fa-tags blogPostLinkIconStyles"></i> {' '}
                            Travel
                        </a>
                    </p>
                </div>
            </nav>
        </div>
        </React.Fragment>
    )
  }
}
