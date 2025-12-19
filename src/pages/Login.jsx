import bgHome from "../assets/pexels-tiger-lily-4483610.jpg";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    // Estados para armazenar o email e senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica
        if (!email || !password) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        // Aqui você pode adicionar a lógica de login, como uma requisição API
        console.log("Email:", email);
        console.log("Password:", password);

        // Limpar os campos após envio
        setEmail("");
        setPassword("");
        setError(""); // Limpar erro

        // 🔐 Aqui entraria a validação real (API)
        if (email && password) {
            // redireciona para Home
            navigate("/home");
        }
    };

    return (
        <section
            className="login-page"
            style={{ backgroundImage: `url(${bgHome})` }}
        >
            <div className="login-overlay"></div>

            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error">{error}</p>}

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
    );
}
