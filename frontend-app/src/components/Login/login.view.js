import React, {useState, useEffect} from 'react';
import styles from './login.module.css';
import PinterestLogo from '../../assets/pinterest_logo.png'
import {deleteToken, getToken, setJWT} from "../../utils/localStorage.utils";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState({});
    const [reloadToken, setReloadToken] = useState(false);

    useEffect(() => {
        const tokenLS = getToken();
        setToken(tokenLS);
    }, [reloadToken])

    const removeToken = () => {
        deleteToken();
        setReloadToken(!reloadToken);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitUserData = () => {

        const url = 'http://localhost/api/auth/login';
        const body = {
            email: email,
            password: password,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
                'authorization': `Bearer ${getToken()}`
            }),
            body: JSON.stringify(body),
            mode: 'cors',
        }

        fetch(url, options)
            .then(response => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                console.log(payload);
                console.log(payload.access_token);
                setJWT(payload.access_token);
            })
            .catch(error => console.log(error));
    }

    return(
        <div className={styles.__container}>
            <img src={PinterestLogo} className={styles.__logo}/>
            <p className={styles.__title}>Bienvenido a Pinterest</p>
            <div className={styles.__wrapperForm}>
                <input
                    type={'email'}
                    className={styles.__inputLogin}
                    placeholder={'Correo'}
                    onChange={handleChangeEmail}
                />
                <input
                    type={'password'}
                    className={styles.__inputLogin}
                    placeholder={'Contraseña'}
                    onChange={handleChangePassword}
                />
                <p className={styles.__forgotPassword}>¿Olvidaste tu contraseña?</p>
                <input
                    type={'submit'}
                    className={styles.__submit}
                    value={'Iniciar Sesión'}
                    onClick={submitUserData}
                />
                <input
                    type={'submit'}
                    onClick={removeToken}
                    value={'Logout'}
                    className={styles.__submit}
                />
                <p className={styles.__conditions}>Al continuar, aceptas los <strong>Términos del servicio</strong>, la <strong>Política de privacidad</strong> y el <strong>uso de cookies</strong> de Pinterest.</p>
            </div>
        </div>
    );
};

export default Login;