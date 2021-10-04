import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { registerUser } from '../../controllers/registerUser';
import { FooterMain } from '../footer/FooterMain';

export const RegisterScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );


    const handleSubmit = (e) => {
        e.preventDefault();
        const btnIngreso = document.getElementById("btnIngresar");
        btnIngreso.classList.remove("btn-wfp-main");
        btnIngreso.classList.add("btn-wfp-main-press");
        const lastPath = localStorage.getItem('lastPath') || '/';
        let userName = document.getElementById('userName').value;
        let userEmail = document.getElementById('userEmail').value;
        let userPassword = document.getElementById('userPassword').value;
        let userConfPassword = document.getElementById('userConfPassword').value;
        let userDni = document.getElementById('userDni').value;
        let dataLog = registerUser(userName,userEmail,userDni,userPassword,userConfPassword);
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
        .catch((e)=>{
            console.warn(e);
            let invalidMessage = document.getElementById('invalidMessage');
            invalidMessage.classList.add("invalid-tooltip-active");
        });
        
    }

    return (
        <div className="fondo-main">
            <img src="./assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-reg-main">
                <form onSubmit={ handleSubmit } className="needs-validation">
                    <strong id="invalidMessage" className="invalid-feedback">
                        * Todos los campos son requeridos
                    </strong>
                    <input 
                        type="text"
                        placeholder="Nombre"
                        className="form-control mt-3 mb-3 txt-input"
                        name="userName"
                        id="userName"
                        autoComplete="off"
                    />

                    <input 
                        type="email"
                        placeholder="Email"
                        className="form-control mt-3 mb-3 txt-input"
                        name="userEmail"
                        id="userEmail"
                        autoComplete="off"
                    />

                    <input 
                        type="text"
                        placeholder="Identificacion"
                        className="form-control mt-3 mb-3 txt-input"
                        name="userDni"
                        id="userDni"
                        autoComplete="off"
                    />

                    <input 
                        type="password"
                        placeholder="Contraseña"
                        className="form-control mt-3 mb-3 txt-input"
                        id="userPassword"
                        name="userPassword"
                        autoComplete="off"
                    />

                    <input 
                        type="password"
                        placeholder="Confirma Contraseña"
                        className="form-control mt-3 mb-3 txt-input"
                        id="userConfPassword"
                        name="userConfPassword"
                        autoComplete="off"
                    />

                    <button
                        id="btnIngresar"
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary btn-wfp-main"
                    >
                        Registrarse
                    </button>
                </form>
            </div>

            <FooterMain />

        </div>
    )
}
