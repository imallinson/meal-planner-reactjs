import React, { Component } from 'react';
import RecipeSearchList from './RecipeSearchList.js'

class MyRecipes extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col12 center"><h3>My Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col12 center">
                        <button className="btn grey darken-2" type="submit">Add a Recipe</button>
                    </div>
                </div>                
                <RecipeSearchList username={this.props.username} editable={true} />
            </div>
        );
    }
}

export default MyRecipes;