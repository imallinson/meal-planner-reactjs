import React, { Component } from 'react';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: null,
            password: null
        }
    }

    logIn = (e) => {
        //check if user exists and password
        this.setState({
            loggedIn: true
        })
    }

    createUser = (e) => {
        //if username does not exist push to user db
        this.setState({
            loggedIn: true
        })
    }

    handleUsernameChange = (e) => {
         this.setState({
            username: e.target.value
         })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
   }

    render() {
        return (
            <div className="page">
                <div className="row">
                    <div className="col text-center" ><input className="rounded" type="text" placeholder="Username" onChange={this.handleUsernameChange}></input></div>
                </div>
                <div className="row">
                    <div className="col text-center" ><input className="rounded" type="password" placeholder="Password" onChange={this.handlePasswordChange}></input></div>
                </div>
                <br />
                <div className="row">
                    <div className="col text-center"><button className="rounded" onClick={this.logIn}>Log In</button> <button className="rounded" onClick={this.createUser}>Create Account</button></div>
                </div>
            </div>
        );
    }
}

export default LoginPage;