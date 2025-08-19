import { useNavigate } from "react-router-dom";
import "../../css/RegisterForm.css";
import BackButton from "../Buttons/BackButton";

function RegisterForm() {
    const navigate = useNavigate();

    function signIn() {
        navigate("/login");
    }

    return <>
        <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
        </div>

        <div className="container">
            <BackButton link="/" />

            <div className="logo">🍽️</div>

            <h1>Inscription</h1>
            <p className="subtitle">Rejoignez la communauté gourmande MealZen</p>

            <div className="error-message" id="errorMessage">
                Veuillez corriger les erreurs dans le formulaire
            </div>

            <form id="registerForm" onSubmit="handleRegister(event)">
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Nom complet</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Jean Dupont"
                        required
                        autoComplete="name"
                        onInput="validateName()"
                    />
                        <div className="validation-message" id="nameMessage"></div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="votre@email.com"
                        required
                        autoComplete="email"
                        onInput="validateEmail()"
                    />
                        <div className="validation-message" id="emailMessage"></div>
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
                            autoComplete="new-password"
                            onInput="validatePassword()"
                        />
                            <button type="button" className="password-toggle" onClick="togglePassword('password')" title="Afficher/Masquer le mot de passe">
                                👁️
                            </button>
                    </div>
                    <div className="password-strength">
                        <div className="strength-bar">
                            <div className="strength-fill" id="strengthFill"></div>
                        </div>
                        <div className="strength-text" id="strengthText">Minimum 6 caractères</div>
                    </div>
                    <div className="validation-message" id="passwordMessage"></div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <div className="password-wrapper">
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-input"
                            placeholder="••••••••"
                            required
                            autoComplete="new-password"
                            onInput="validatePasswordConfirm()"
                        />
                            <button type="button" className="password-toggle" onClick="togglePassword('confirmPassword')" title="Afficher/Masquer le mot de passe">
                                👁️
                            </button>
                    </div>
                    <div className="validation-message" id="confirmPasswordMessage"></div>
                </div>

                <button type="submit" className="btn btn-primary" id="submitBtn">
                    Créer mon compte
                </button>
            </form>

            <div className="divider">
                <span>ou</span>
            </div>

            <div className="login-link">
                Déjà inscrit ? <a onClick={signIn}>Se connecter</a>
            </div>
        </div>
    </>
}

export default RegisterForm;