import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { signIn } from "../../controllers/basicAuth";
import { FooterMain } from '../footer/FooterMain';
import { Form, TextInput, Button  } from "@wfp/ui";

// Login component
export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({
        userName: q
    });
    const { userName } = formValues;

    useEffect(() => {
        document.getElementById('userName-error-msg').style.display="none";
        document.getElementById('userPassword-error-msg').style.display="none";
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const btnIngreso = document.getElementById("btnIngresar");
        btnIngreso.classList.remove("btn-wfp-main");
        btnIngreso.classList.add("btn-wfp-main-press");
        
        const lastPath = localStorage.getItem('lastPath') || '/home';
        let userPassword = document.getElementById('userPassword').value;
        let userNameErr = document.getElementById('userName');
        if(userName===""){ 
            userNameErr.classList.add("is-invalid");
            document.getElementById('userName-error-msg').classList.add("wfp--form-requirement-show");
            document.getElementById('userName-error-msg').style.display="block";
        }
        else{
            userNameErr.classList.remove("is-invalid");
            document.getElementById('userName-error-msg').classList.remove("wfp--form-requirement-show");
        }
        let userPasswordErr = document.getElementById('userPassword');
        if(userPassword===""){
            userPasswordErr.classList.add("is-invalid");
            document.getElementById('userPassword-error-msg').classList.add("wfp--form-requirement-show");
            document.getElementById('userPassword-error-msg').style.display="block";
        }
        else{
            userPasswordErr.classList.remove("is-invalid");
            document.getElementById('userPassword-error-msg').classList.remove("wfp--form-requirement-show");
            
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
        <div className="fund-main">
            <img src="/assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-login-main">
                <Form onSubmit={ handleSubmit } className="needs-validation">
                    <strong id="invalidMessage" className="invalid-feedback">
                        * Identificación y/o Contraseña invalidas
                    </strong>
                    
                    <TextInput
                        placeholder="Identificación"
                        className="form-control txt-input"
                        name="userName"
                        id="userName"
                        autoComplete="off"
                        value={ userName }
                        onChange={ handleInputChange }
                        invalid={{
                            message: ''
                            }}
                        invalidText="Identificación requerido"
                        required
                    />
                        
                    <TextInput
                        type="password"
                        placeholder="Contraseña"
                        className="form-control mb-3 txt-input"
                        id="userPassword"
                        name="userPassword"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Contraseña requerida"
                        required
                    />
                    <br/>
                    <Button
                        id="btnIngresar"
                        type="submit"
                        className="btn m-1 btn-block btn-wfp-main"
                    >
                        Ingresar
                    </Button>
                    <br/>
                    <br/>
                    ¿Aun no se ha registrado?
                    <br/>
                    Por favor registrese
                    <br/>
                    <br/>
                    <Link to={ `/auth/registry` }
                        className="btn m-1 btn-block btn-wfp-main"
                        onClick={hadlePress}
                    >
                        Registrarse
                    </Link>
                    
                </Form>
            </div>

            <FooterMain />

        </div>
    )
}
