import React, { Component } from 'react';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            userName: null,
            password: null
        }
    }

    logIn = (e) => {
        e.overideDefault();
        //check if user exists and password
        this.setState({
            loggedIn: true
        })
    }

    createUser = (e) => {
        e.overideDefault();
        //if username does not exist push to user db
        this.setState({
            loggedIn: true
        })
    }

    // handleChange = (e) => {
    //     this.setState({
    //         userName: 
    //     })
    // }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col text-right">Username</div>
                    <div className="col" ><input type="text"></input></div>
                </div>
                <div className="row">
                    <div className="col text-right">Password</div>
                    <div className="col" ><input type="text"></input></div>
                </div>
                <br />
                <div className="row">
                    <div className="col text-right"><button onClick={this.logIn}>Log In</button></div>
                    <div className="col" ><button onClick={this.createUser}>Create Account</button></div>
                </div>
            </div>
        );
    }
}

export default LoginPage;