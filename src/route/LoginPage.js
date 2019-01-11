import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-5"> </div>
                    <div class="col-sm-1">Username</div>
                    <div class="col-sm-1" >
                        <input type="text"></input>
                    </div>
                    <div class="col-sm-5"> </div>
                </div>
                <div class="row">
                    <div class="col-sm-5"> </div>
                    <div class="col-sm-1">Password</div>
                    <div class="col-sm-1" >
                        <input type="text"></input>
                    </div>
                    <div class="col-sm-5"> </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;