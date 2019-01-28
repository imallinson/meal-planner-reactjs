import React, { Component } from 'react';
import RecipeResult from './RecipeResult.js';

class RecipeSearchList extends Component {
    render() {
        if (this.props.recipeList.length === 0) {
            return null;
        } else {
            for (let i = 0; i < this.props.recipeList.length; i++) {
                return (
                    <RecipeResult recipe={this.state.recipeList[i]} editable={this.props.editable} />
                );
            }
        }
    }
}

export default RecipeSearchList;