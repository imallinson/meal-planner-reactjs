import React, { Component } from 'react';

class RecipeResult extends Component {

    render() {
        return (
            <div className="row">
                <div className="col10">{this.props.recipe.recipeName}</div>
                {this.props.editable ?
                <div className="col2"><button className="btn grey darken-2" type="button" >Edit</button></div> :
                <div className="col2"></div>}
            </div>
        );
    }
}

export default RecipeResult;