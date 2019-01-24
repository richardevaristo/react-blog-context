import React, { Component } from 'react';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
