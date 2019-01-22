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
            <div className="container">
                <div className="row">
                    <div className="col12 center"><h3>Search for Recipes</h3></div>
                </div>
                <div className="row">
                    <div className="col12">
                        <input className="validate" type="text" id="recipeSearch" onChange={this.handleChange}></input>
                    </div>
                </div>
                <RecipeSearchList searchString={this.state.searchString} editable={false} />
            </div>
        );
    }
}

export default RecipeSearch;