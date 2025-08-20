import React, { useState } from "react";
import "../../css/LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/Auth";
import { useAuth } from "../../context/AuthContext";
import BackButton from "../Buttons/BackButton";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessageStyle, setErrorMessageStyle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginAPI(email, password);

      if (response.status === 200 && response.data.token) {

        login(response.data);
        window.location.href = "/dashboard";
      } 
    } catch (error) {
      setErrorMessageStyle(true);
    }
  }

  function register() {
    navigate("/register");
  };

  return <>
    <div className="floating-elements">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
    </div>

    <div className="container" title="Retour">
      <BackButton link="/"/>

      <div className="logo">🍽️</div>

      <h1>Connexion</h1>

      <div className="error-message" style={{display: errorMessageStyle ? "block" : "none"}} id="errorMessage">
        Email ou mot de passe incorrect
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="votre@email.com"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Mot de passe</label>
          <div className="password-wrapper">
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/*               <button type="button" className="password-toggle" onClick="togglePassword()" title="Afficher/Masquer le mot de passe">
                👁️
              </button> */}
          </div>
          {/* <div className="forgot-password">
            <a href="#" onClick="showForgotPassword()">Mot de passe oublié ?</a>
          </div> */}
        </div>

        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>

      <div className="divider">
        <span>ou</span>
      </div>

      <div className="register-link">
        Pas encore de compte ? <a onClick={register}>Créer un compte</a>
      </div>
    </div>
  </>;
}

export default LoginForm;
