import React, { Component } from 'react';
import RecipeSearchList from './RecipeSearchList.js'

class MyRecipes extends Component {
    render() {
        return (
            <div className="page">
                <div className="row">
                    <div className="col text-center"><h3>My Recipes</h3></div>
                </div>
                <div className="row border rounded" id="recipeList">
                    <div className="col">
                        <div className="row">
                            <div className="col text-center"><button className="rounded">Add Recipe</button></div>
                        </div>
                        <div className="row">
                            <div className="col"><RecipeSearchList username={null} /></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MyRecipes;