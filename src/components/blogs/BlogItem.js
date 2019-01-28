import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../context'

// Array of month names 
import months from '../variables/months'


export default class BlogItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBlog: false
        }
        this.toggleShowContent = this.toggleShowContent.bind(this);
    }

    toggleShowContent = () => this.setState({ 
        showBlog: !this.state.showBlog 
    })

    showContent = ({content, created_at, author, category}) => {
        return (
            <React.Fragment>
            <h2 className="subtitle">
                {content}
            </h2>
            <nav className="level">
                <div className="level-left">
                    <p className="level-item">
                        <Link to="/blog/author/:name" className="blogPostLinkStyles">
                            <i className="fa fa-user blogPostLinkIconStyles"></i> {' '}
                            {author}
                        </Link>
                    </p>
                    <p className="level-item">
                        <Link to="/blog/date/:date" className="blogPostLinkStyles">
                            <i className="fa fa-calendar blogPostLinkIconStyles"></i> {' '}
                            {this.convertDate(created_at)}
                        </Link>
                    </p>
                    <p className="level-item">
                        <Link to="/blog/category/:category" className="blogPostLinkStyles">
                            <i className="fa fa-list-alt blogPostLinkIconStyles"></i> {' '}
                            {category}
                        </Link>
                    </p>
                    <p className="level-item">
                        <Link to="/blog/tag/:name" className="blogPostLinkStyles">
                            <i className="fa fa-tags blogPostLinkIconStyles"></i> {' '}
                            Travel
                        </Link>
                    </p>
                </div>
            </nav>
            </React.Fragment>
        )
    }
    
    // accepts string date
    // convert the format of the date
    convertDate(date) {
        const d       = new Date(date);
        const newDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        return newDate;
    }

    render() {
        return (
            <Consumer>
                {value => {
                    // const { dispatch } = value;
                    return (
                        <React.Fragment>
                        <div className="box">
                            <h1 className="title">
                                {this.props.blog.title} {' '}
                                <i 
                                    className = "fa fa-caret-down"
                                    onClick   = { this.toggleShowContent }
                                    style     = { {cursor:'pointer'} }
                                ></i>
                                
                            </h1>
                            {this.state.showBlog && this.showContent(this.props.blog)}
                        </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
