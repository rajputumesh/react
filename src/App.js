import React, { Component } from 'react';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Footer from './component/Footer.js';

class App extends Component {
  render() {
    return (<>
        <Header />
        <Home />
        <Footer />
    </>);
  }
}

export default App;
