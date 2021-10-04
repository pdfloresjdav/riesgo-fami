import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { signIn } from "../../controllers/basicAuth";
import { FooterMain } from '../footer/FooterMain';

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
        const btnIngreso = document.getElementById("btnIngresar");
        btnIngreso.classList.remove("btn-wfp-main");
        btnIngreso.classList.add("btn-wfp-main-press");
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        let userPassword = document.getElementById('userPassword').value;
        let userNameErr = document.getElementById('userName');
        if(userName===""){ 
            userNameErr.classList.add("is-invalid");
        }
        else{
            userNameErr.classList.remove("is-invalid");
        }
        let userPasswordErr = document.getElementById('userPassword');
        if(userPassword===""){
            userPasswordErr.classList.add("is-invalid");
        }
        else{
            userPasswordErr.classList.remove("is-invalid");
        }
        if(userName!=="" && userPassword!==""){
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
            .catch((e)=>{
                console.warn(e);
                let invalidMessage = document.getElementById('invalidMessage');
                invalidMessage.classList.add("invalid-tooltip-active");
            });
        }
        

        
    }

    const hadlePress = (e) => {
        e.currentTarget.classList.remove("btn-wfp-main");
        e.currentTarget.classList.add("btn-wfp-main-press");
    };

    return (
        <div className="fondo-main">
            <img src="./assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-login-main">
                <form onSubmit={ handleSubmit } className="needs-validation">
                    <strong id="invalidMessage" className="invalid-feedback">
                        * DNI y/o Contraseña invalidas
                    </strong>
                    <div className="position-relative">
                        <input 
                            type="text"
                            placeholder="DNI"
                            className="form-control txt-input"
                            name="userName"
                            id="userName"
                            autoComplete="off"
                            value={ userName }
                            onChange={ handleInputChange }
                            
                        />
                        <div className="invalid-tooltip">
                            DNI requerido
                        </div>
                    </div>
                    <div className="position-relative">
                        <input 
                            type="password"
                            placeholder="Contraseña"
                            className="form-control mt-3 mb-3 txt-input"
                            id="userPassword"
                            name="userPassword"
                            autoComplete="off"
                        />
                        <div id="userPasswordErr" className="invalid-tooltip">
                            Contraseña requerida
                        </div>
                    </div>

                    <button
                        id="btnIngresar"
                        type="submit"
                        className="btn m-1 btn-block btn-wfp-main"
                    >
                            Ingresar
                    </button>
                    <br/>
                    <br/>
                    ¿Aun no se ha registrado?
                    <br/>
                    Por favor registrese
                    <br/>
                    <br/>
                    <a 
                        href="/registro" 
                        className="btn m-1 btn-block btn-wfp-main"
                        onClick={hadlePress}
                    >
                        Registrarse
                    </a>
                    
                </form>
            </div>

            <FooterMain />

        </div>
    )
}
