import React, { Component } from 'react'
import { Consumer } from '../context'
import { Link } from 'react-router-dom'
// Array of month names 
import months from '../variables/months'


export default class BlogItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBlog: false
        }
        this.toggleShowContent = this.toggleShowContent.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this)
    }

    deleteBlog = (id, dispatch) => {
        dispatch(
            {
                type: 'DELETE_BLOG',
                payload: id
            }
        )
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
                        <i className="fa fa-user blogPostLinkIconStyles"></i> {' '}
                        {author}
                    </p>
                    <p className="level-item">
                        <i className="fa fa-calendar blogPostLinkIconStyles"></i> {' '}
                        {this.convertDate(created_at)}
                    </p>
                    <p className="level-item">
                        <i className="fa fa-list-alt blogPostLinkIconStyles"></i> {' '}
                        {category}
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
                    const { dispatch } = value;
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
                                
                                <i 
                                    className = "fa fa-times is-pulled-right has-text-danger"
                                    onClick   = {() => this.deleteBlog(this.props.blog.id,dispatch) }
                                    style     = {{cursor: 'pointer'}}
                                ></i>
                                <Link to={{
                                    pathname: `/blog/edit/${this.props.blog.slug}`,
                                    state: {
                                        blog: this.props.blog
                                    }
                                }}>
                                <i 
                                    className = "fa fa-pencil is-pulled-right"
                                    style     = {{cursor: 'pointer'}}
                                ></i>
                                </Link>
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
