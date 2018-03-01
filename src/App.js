import React, { Component } from 'react';
import './styles/App.css';

import NavBar from './components/navbar';
import JumboTron from './components/jumboTron';
import Mission from './components/mission';
import Experience from './components/experience';
import Projects from './components/projects';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
				<JumboTron />
				<Mission />
				<Experience />
				<Projects />
				<Footer />
      </div>
    );
  }
}

export default App;
