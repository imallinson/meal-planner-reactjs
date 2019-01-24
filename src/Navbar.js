import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
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
            username: null
        }
    }

    setUsername = (e) => {
        this.setState({
            loggedIn: true,
            username: e.value
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="nav-wrapper grey darken-3">
                            <a href="#!" className="brand-logo center">Logo</a>
                            <ul>
                                <li className="nav-item"><Link to="/" className="nav-link">Recipe Search</Link></li>
                                <li className="nav-item"><Link to="/myrecipes" className="nav-link">My Recipes</Link></li>
                                <li className="nav-item"><Link to="/mealplan" className="nav-link">Meal Plan</Link></li>
                                <li className="nav-item"><Link to="/shoppinglist" className="nav-link">Shopping List</Link></li>
                            </ul>
                            <ul className="right">
                                {this.state.loggedIn ?
                                    <li className="nav-item"><Link to="/" className="nav-link">Log Out</Link></li> :
                                    <li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
                                }
                            </ul>
                        </div>
                    </nav><br />
                    {this.state.loggedIn ? <Redirect to='/myrecipes' /> : <Redirect to='/myrecipes' />}
                    <Route exact path="/" component={RecipeSearch} />
                    <Route path="/myrecipes" component={MyRecipes} />
                    <Route path="/mealplan" component={MealPlan} username={this.username} />
                    <Route path="/shoppinglist" component={ShoppingList} />
                    <Route path="/login" render={() => <LoginPage handleLogin={this.setUsername} /> } />
                </div>
            </Router>
        );
    }
}

export default Navbar;

