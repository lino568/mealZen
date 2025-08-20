import "../../css/RegisterForm.css";
import { registerAPI } from "../../services/Auth";
import BackButton from "../Buttons/BackButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function RegisterForm() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordLengthMessageColor, setPasswordLengthMessageColor] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [confirmedPasswordMessage, setConfirmedPasswordMessage] = useState("");
    const [confirmedPasswordMessageStyle, setConfirmedPasswordMessageStyle] = useState("");
    const [errorMessageOnBubmit, setErrorMessageOnBubmit] = useState(false);

    useEffect(() => {
        if (!confirmedPassword) {
            setConfirmedPasswordMessage("");
            setConfirmedPasswordMessageStyle("");
        } else if (password !== confirmedPassword) {
            setConfirmedPasswordMessage("Les mots de passe ne correspondent pas");
            setConfirmedPasswordMessageStyle("validation-message")
        } else {
            setConfirmedPasswordMessage("Mot de passe confirmé");
            setConfirmedPasswordMessageStyle("validation-message valid");
        }
    }, [password, confirmedPassword]);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length === 0) {
            setPasswordLengthMessageColor("");
        }

        if (value.length !== 0 && value.length < 6) {
            setPasswordLengthMessageColor("red");
        }

        if (value.length >= 6) {
            setPasswordLengthMessageColor("green");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmedPassword) {
            setErrorMessageOnBubmit(true);
        } else {

            try {
                const response = await registerAPI(name, email, password, confirmedPassword);

                if (response.status === 200 && response.data.token) {
                    setErrorMessageOnBubmit(false);
                    login(response.data);
                    navigate("/dashboard")
                }
            } catch (error) {
                setErrorMessageOnBubmit(true);
            }
        }
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

            <div className="error-message" style={{ display: errorMessageOnBubmit ? "block" : "none" }} id="errorMessage">
                Veuillez corriger les erreurs dans le formulaire
            </div>

            <form id="registerForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Nom complet</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Jean Dupont"
                        required
                        autoComplete="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        //TODO faire le toggle de visibilité du password
                        <button type="button" className="password-toggle" /* onClick="togglePassword('password')" */ title="Afficher/Masquer le mot de passe">
                            👁️
                        </button>
                    </div>
                    <div className="password-strength">
                        <div className="strength-bar">
                            <div className="strength-fill" id="strengthFill"></div>
                        </div>
                        <div className="strength-text" style={{ color: passwordLengthMessageColor }} id="strengthText">Minimum 6 caractères</div>
                    </div>
                    <div className="validation-message" id="passwordMessage"></div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password_confirmation">Confirmer le mot de passe</label>
                    <div className="password-wrapper">
                        <input
                            type="password"
                            id="password_confirmation"
                            className="form-input"
                            placeholder="••••••••"
                            required
                            autoComplete="new-password"
                            onChange={(e) => setConfirmedPassword(e.target.value)}
                            value={confirmedPassword}
                        />
                        <button type="button" className="password-toggle" /* onClick="togglePassword('confirmPassword')" */ title="Afficher/Masquer le mot de passe">
                            👁️
                        </button>
                    </div>
                    <div className={confirmedPasswordMessageStyle} id="confirmPasswordMessage">{confirmedPasswordMessage}</div>
                </div>

                <button type="submit" className="btn btn-primary" id="submitBtn">
                    Créer mon compte
                </button>
            </form>

            <div className="divider">
                <span>ou</span>
            </div>

            <div className="login-link">
                Déjà inscrit ? <Link className="login-link-element" to="/login">Se connecter</Link>
            </div>
        </div>
    </>
}

export default RegisterForm;