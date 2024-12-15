import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import Header from './components/Header';*/
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import ShoppingListPage from './pages/ShoppingListPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                    <Route path="/recipe/:id" element={<RecipePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/shopping-list" element={<ShoppingListPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
