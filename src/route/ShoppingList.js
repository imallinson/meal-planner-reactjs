import React, { Component } from 'react';
import Ingredient from './Ingredient.js';

class ShoppingList extends Component {
    addMeal = () => {

    }

    addIngredient = () => {

    }

    clearList = () => {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s2 center">
                        <button className="btn grey darken-2" type="submit" onClick={this.addMeal}>Add Meal</button>
                    </div>
                    <div className="col s2 center">
                        <button className="btn grey darken-2" type="submit" onClick={this.addIngredient}>Add Ingredient</button>
                    </div>
                    <div className="col s2 center">
                        <button className="btn grey darken-2" type="submit" onClick={this.clearList}>Clear List</button>
                    </div>
                    <div className="col s3"></div>
                </div>
                <div className="row">
                    <Ingredient />
                </div>
            </div>
        );
    }
}

export default ShoppingList;