import React, { Component } from 'react';
import materialize from 'materialize';

class RecipePage extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>recipe</h1>
                    <button onClick={this.props.closePopup}><i class="large material-icons">close</i></button>
                </div>
            </div>
        );
    }
}

export default RecipePage;