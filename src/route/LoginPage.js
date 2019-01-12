import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col text-right" >Username</div>
                    <div className="col" >
                        <input type="text"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-right">Password</div>
                    <div className="col" >
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;