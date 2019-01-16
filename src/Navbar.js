import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyRecipes from './route/MyRecipes.js';
import RecipeSearch from './route/RecipeSearch.js';
import MealPlan from './route/MealPlan.js';
import ShoppingList from './route/ShoppingList.js';
import LoginPage from './route/LoginPage.js';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            userName: null
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <a className="navbar-brand abs" href="/">LOGO</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                            <div className="navbar-toggler-icon"></div>
                        </button>
                        <div className="navbar-collapse collapse" id="collapsingNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">Recipe Search</Link></li>
                                <li className="nav-item"><Link to="/myrecipes" className="nav-link">My Recipes</Link></li>
                                <li className="nav-item"><Link to="/mealplan" className="nav-link">Meal Plan</Link></li>
                                <li className="nav-item"><Link to="/shoppinglist" className="nav-link">Shopping List</Link></li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                {this.state.loggedIn ?                                    
                                    <li className="nav-item"><Link to="/" className="nav-link">Log Out</Link></li> :
                                    <li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
                                }
                            </ul>
                        </div>
                    </nav><br />
                    <Route exact path='/' component={RecipeSearch} />
                    <Route path='/myrecipes' component={MyRecipes} />
                    <Route path='/mealplan' component={MealPlan} />
                    <Route path='/shoppinglist' component={ShoppingList} />
                    <Route path='/login' component={LoginPage} />
                </div>
            </Router>
        );
    }
}

export default Navbar;

