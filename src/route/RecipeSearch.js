import React, { Component } from 'react';
import RecipeSearchList from './RecipeSearchList.js';
import axios from 'axios';

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchString: "",
            recipeList: []
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        var actuallyThis = this;
        axios({
            method: 'get',
            url: 'http://localhost:8081/meal-planner/rest/recipe/searchRecipes/' + actuallyThis.state.searchString,
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col12 center"><h3>Search for Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col12">
                        <input className="validate" type="text" id="recipeSearch" onChange={this.handleChange}></input>
                    </div>
                </div>
                <RecipeSearchList recipeList={this.state.recipeList} editable={false} />
            </div>
        );
    }
}

export default RecipeSearch;