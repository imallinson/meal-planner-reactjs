import React, { Component } from 'react';
import RecipeResult from './RecipeResult.js';

class RecipeSearchList extends Component {

    render() {
        return (
            <div className="row">
                <RecipeResult />
            </div>
        );
    }
}

export default RecipeSearchList;