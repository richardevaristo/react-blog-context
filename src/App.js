import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './components/context';
import 'bulma/css/bulma.css';
// Components
import Header from './components/layouts/Header';
// import Main from './components/main/Main';
import Blogs from './components/blogs/Blogs';
import AddBlog from './components/blogs/AddBlog';
import EditBlog from './components/blogs/EditBlog';
import About from './components/pages/About';
// import Footer from './components/layouts/Footer';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog/create" component={AddBlog} />
            <Route exact path="/blog/edit/:id" component={EditBlog} />
          </Switch>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
