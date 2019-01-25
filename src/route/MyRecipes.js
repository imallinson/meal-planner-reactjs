import React, { Component } from 'react';
import RecipeSearchList from './RecipeSearchList.js';
import axios from 'axios';

class MyRecipes extends Component {
    constructor() {
        super();
        this.state = {
            recipeList: []
        }
    }

    componentWillMount = () => {
        var path = "http://localhost:8081/meal-planner/rest/recipe/user/" + this.props.username;
        var actuallyThis = this;
        axios({
            method: 'get',
            url: path,
            responseType: 'json'
        })
        .then(function (response) {
            actuallyThis.setState({
                 recipeList: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    addRecipe = () => {
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col12 center"><h3>My Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col12 center">
                        <button className="btn grey darken-2" type="button" onClick={this.addRecipe} >Add a Recipe</button>
                    </div>
                </div>             
                <RecipeSearchList recipeList={this.state.recipeList} editable={true} />
            </div>
        );
    }
}

export default MyRecipes;