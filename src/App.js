import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: null
        }
    }

    logIn = (loginDeatais) => {

    }

    logOut = () => {
        this.setState({
            loggedIn: false,
            username: null
        })
    }

    render() {
        return (
            <div className="App">
                <Navbar username={this.state.username} loggedIn={this.state.loggedIn} logOut={this.logOut} logIn={this.logIn} />
            </div>
        );
    }
}

export default App;
