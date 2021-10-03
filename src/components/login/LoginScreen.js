import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { signIn } from "../../controllers/basicAuth";

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({
        userName: q
    });
    const { userName } = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath') || '/';
        let userPassword = document.getElementById('userPassword').value;
        let dataLog =  signIn(userName,userPassword);
        dataLog.then((e)=>{
            dispatch({
                type: types.login,
                payload: {
                    name: e.data.user.name,
                    token: e.data.access_token
                }
            });

            history.replace( lastPath );
        })
        .catch(console.warn)

        
    }

    return (
        <div className="container mt-5">
            <h1>Iniciar Sesión</h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Nombre de Usuario"
                    className="form-control"
                    name="userName"
                    autoComplete="off"
                    value={ userName }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    className="form-control mt-3 mb-3"
                    id="userPassword"
                    name="userPassword"
                    autoComplete="off"
                />

                <button
                    type="submit"
                    className="btn m-1 btn-block btn-outline-primary"
                >
                    Iniciar Sesión
                </button>
                <br/>
                
                <br/>
                <a href="/registro" className="btn m-1 btn-block btn-outline-primary">Registrar Usuario</a>
            </form>

        </div>
    )
}
