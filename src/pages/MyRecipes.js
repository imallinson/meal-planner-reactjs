import React, { Component } from 'react';
import RecipeSearchList from '../components/RecipeSearchList.js';
import axios from 'axios';

class MyRecipes extends Component {
    constructor() {
        super();
        this.state = {
            recipeList: [],
            search: true
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
        this.setState({
            search: false
        })
    }

    closeRecipe = () => {
        this.setState({
            search: true
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col12 center"><h3>My Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col12 center">
                        <button className="btn grey darken-2" type="button" >Add a Recipe</button>
                    </div>
                </div>
                {this.state.search ?
                <RecipeSearchList recipeList={this.state.recipeList} editable={true} /> :
                <RecipePage closePage={this.closeRecipe} recipeID={-1} /> }
            </div>
        );
    }
}

export default MyRecipes;