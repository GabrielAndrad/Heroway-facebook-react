
import React from 'react';


function Login() {
    return (
        <div className="login">
            <div className="login-box">
                <input className="github-input" type="text" placeholder="Digite seu usuário do Github" />
                <button className="github-button">Enviar</button>
            </div>
        </div>
    );
}

export default Login;