import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyRecipes from './route/MyRecipes.js';
import RecipeSearch from './route/RecipeSearch.js';
import MealPlan from './route/MealPlan.js';
import ShoppingList from './route/ShoppingList.js';
import LoginPage from './route/LoginPage.js';


class Navbar extends Component {
    handleLogOut = (e) => {
        this.props.logOut();
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><Link to="/" className="nav-link">Recipe Search</Link></li>
                                <li className="nav-item"><Link to="/myrecipes" className="nav-link">My Recipes</Link></li>
                                <li className="nav-item"><Link to="/mealplan" className="nav-link">Meal Plan</Link></li>
                                <li className="nav-item"><Link to="/shoppinglist" className="nav-link">Shopping List</Link></li>
                                {this.props.loggedIn ?  
                                <li className="nav-item"><Link to="/" className="nav-link" onClick={this.handleLogOut}>Log Out</Link></li> :
                                <li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
                                }
                            </ul>
                            <hr />
                        </div>
                    </nav>
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

