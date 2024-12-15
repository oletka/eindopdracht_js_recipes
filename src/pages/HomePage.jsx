import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Recipes</h1>
            </header>

            <nav className="homepage-nav">
                <ul>
                    <li>
                        <Link to="/login">Login / Register</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipe Search</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/settings">Diet Settings</Link>
                    </li>
                    <li>
                        <Link to="/shopping-list">Shopping List</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                </ul>
            </nav>

            <footer className="homepage-footer">
                <p>© 2024 Recipes, All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default HomePage;
