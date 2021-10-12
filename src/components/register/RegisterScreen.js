import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { registerUser } from '../../controllers/registerUser';
import { FooterMain } from '../footer/FooterMain';
import { Form, TextInput, Button  } from "@wfp/ui";

// Registration component
export const RegisterScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    useEffect(() => {
        document.getElementById('userName-error-msg').style.display="none";
        document.getElementById('userEmail-error-msg').style.display="none";
        document.getElementById('userPassword-error-msg').style.display="none";
        document.getElementById('userConfPassword-error-msg').style.display="none";
        document.getElementById('userDni-error-msg').style.display="none";
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const btnIngreso = document.getElementById("btnIngresar");
        btnIngreso.classList.remove("btn-wfp-main");
        btnIngreso.classList.add("btn-wfp-main-press");
        const lastPath = localStorage.getItem('lastPath') || '/';
        let userNameMain = document.getElementById('userName');
        let userName = userNameMain.value;
        let userEmailMain = document.getElementById('userEmail');
        let userEmail = userEmailMain.value;
        let userPasswordMain = document.getElementById('userPassword');
        let userPassword = userPasswordMain.value;
        let userConfPasswordMain = document.getElementById('userConfPassword');
        let userConfPassword = userConfPasswordMain.value;
        let userDniMain = document.getElementById('userDni');
        let userDni = userDniMain.value;
        if(userName===""){
            userNameMain.classList.add("is-invalid");
            document.getElementById('userName-error-msg').style.display="block";
        }
        else{
            userNameMain.classList.remove("is-invalid");
            document.getElementById('userName-error-msg').style.display="none";
        }
        if(userEmail===""){
            userEmailMain.classList.add("is-invalid");
            document.getElementById('userEmail-error-msg').style.display="block";
        }
        else{
            document.getElementById('userEmail-error-msg').style.display="none";
        }
        if(userPassword===""){
            userPasswordMain.classList.add("is-invalid");
            document.getElementById('userPassword-error-msg').style.display="block";
        }
        else{
            document.getElementById('userPassword-error-msg').style.display="none";
        }
        if(userConfPassword===""){
            userConfPasswordMain.classList.add("is-invalid");
            document.getElementById('userConfPassword-error-msg').style.display="block";
        }
        else{
            document.getElementById('userConfPassword-error-msg').style.display="none";
        }
        if(userDni===""){
            userDniMain.classList.add("is-invalid");
            document.getElementById('userDni-error-msg').style.display="block";
        }
        else{
            document.getElementById('userDni-error-msg').style.display="none";
        }
        let invalidMessage = document.getElementById('invalidMessage');
        if(userPassword === userConfPassword){
            if(userName!=="" && userEmail!=="" && userDni!=="" && userPassword!=="" && userConfPassword!==""){
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
                });
            }
            invalidMessage.classList.remove("invalid-tooltip-active");
        }
        else{
            invalidMessage.classList.add("invalid-tooltip-active");
        }
        
        
        
    }

    return (
        <div className="fund-main">
            <img src="./assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-reg-main">
                <Form onSubmit={ handleSubmit } className="needs-validation">
                    <strong id="invalidMessage" className="invalid-feedback">
                        * Contraseña y confirmacion de Contraseña deben ser iguales
                    </strong>
                    <TextInput
                        placeholder="Nombre"
                        className="form-control txt-input"
                        name="userName"
                        id="userName"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Nombre requerido"
                        required
                    />

                    <TextInput
                        type="email"
                        placeholder="Email"
                        className="form-control txt-input"
                        name="userEmail"
                        id="userEmail"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Email requerido"
                        required
                    />

                    <TextInput
                        placeholder="Identificacion"
                        className="form-control txt-input"
                        name="userDni"
                        id="userDni"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Identificación requerida"
                        required
                    />

                    <TextInput
                        type="password"
                        placeholder="Contraseña"
                        className="form-control txt-input"
                        id="userPassword"
                        name="userPassword"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Contraseña requerida"
                        required
                    />

                    <TextInput
                        type="password"
                        placeholder="Confirma Contraseña"
                        className="form-control txt-input"
                        id="userConfPassword"
                        name="userConfPassword"
                        autoComplete="off"
                        invalid={{
                            message: ''
                            }}
                        invalidText="Confirmación requerida"
                        required
                    />

                    <Button
                        id="btnIngresar"
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary btn-wfp-main"
                    >
                        Registrarse
                    </Button>
                </Form>
            </div>

            <FooterMain />

        </div>
    )
}
