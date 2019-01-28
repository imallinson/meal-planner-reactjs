import React, { Component } from 'react';
import RecipeSearchList from '../components/RecipeSearchList.js';
import axios from 'axios';

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchString: null,
            recipeList: []
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
        var path = "http://localhost:8081/meal-planner/rest/recipe/search/" + this.state.searchString;
        var actuallyThis = this;
        axios({
            method: 'get',
            url: path,
            responseType: 'json'
        })
        .then(function (response) {
            console.log(response.data)
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