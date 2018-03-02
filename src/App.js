import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
