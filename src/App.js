import React, { Component } from 'react';

import './styles/App.css';

import NavBar from './components/navbar';
import Routes from './routes';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
				<Routes />
				<Footer />
      </div>
    );
  }
}

export default App;
