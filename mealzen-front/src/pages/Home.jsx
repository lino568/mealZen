import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/Home.css";

function Home() {
    return <>
        <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
        </div>

        <div className="container">
            <div className="logo">🍽️</div>

            <h1>MealZen</h1>
            <p className="subtitle">Votre compagnon culinaire pour des repas savoureux et une organisation zen</p>

            <div className="features">
                <div className="feature">
                    <div className="feature-icon">🍳</div>
                    <div className="feature-text">Créez vos recettes avec amour</div>
                </div>
                <div className="feature">
                    <div className="feature-icon">🤝</div>
                    <div className="feature-text">Partagez avec la communauté gourmande</div>
                </div>
                <div className="feature">
                    <div className="feature-icon">🗓️</div>
                    <div className="feature-text">Planifiez vos repas sereinement</div>
                </div>
                <div className="feature">
                    <div className="feature-icon">🛒</div>
                    <div className="feature-text">Courses intelligentes en un clic</div>
                </div>
            </div>

            <div className="auth-buttons">
                <Link to="/login" className="btn btn-primary">Se connecter</Link>
                <Link to="/register" className="btn btn-secondary">S'inscrire</Link>
            </div>
        </div>
    </>
}

export default Home;