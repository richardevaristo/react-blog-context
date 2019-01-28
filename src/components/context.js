import React, { Component, createContext } from 'react';
import { v4 } from 'uuid'

const Context = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_BLOG':
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            }
        default :
            return state
    }
}

export class Provider extends Component {
    constructor() {
        super();
        this.state = {
            blogs: [
              {
                id        : v4(),
                slug      : 'blog-post-1',
                title     : 'Blog Post 1',
                content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
                author    : 'John Doe',
                category  : 'Travel',
                created_at: '2019-01-20'
              },
              {
                id        : v4(),
                slug      : 'blog-post-2',
                title     : 'Blog Post 2',
                content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
                author    : 'Jane Smith',
                category  : 'Travel',
                created_at: '2019-02-03'
              },
              {
                id        : v4(),
                slug      : 'blog-post-3',
                title     : 'Blog Post 3',
                content   : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus reiciendis accusantium ullam ad at, delectus alias nemo exercitationem sunt rem omnis facilis neque, architecto nostrum quibusdam? Sint harum incidunt voluptatibus!',
                author    : 'John Doe',
                category  : 'Travel',
                created_at: '2019-04-01'
              }
            ],
            dispatch: action => {
                this.setState(state => reducer(state,action))
            }
        }
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer