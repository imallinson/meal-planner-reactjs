import React, { Component } from 'react';
import RecipeSearchList from './RecipeSearchList.js'

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchString: null
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div className="page">
                <div className="row">
                    <div className="col text-center"><h3>Search for Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <input className="rounded" type="text" id="recipeSearch" onChange={this.handleChange}></input>
                        <button className="btn pull-right" id="search-button" type="submit">Search</button>
                    </div>
                </div>
                <div className="row border rounded" id="recipeList">
                    <RecipeSearchList searchString={this.state.searchString} />
                </div>
            </div>
        );
    }
}

export default RecipeSearch;