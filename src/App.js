import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
            </div>
        );
    }
}

export default App;
