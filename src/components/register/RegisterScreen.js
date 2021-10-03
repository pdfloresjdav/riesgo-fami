import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { registerUser } from '../../controllers/registerUser';

export const RegisterScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );


    const handleSubmit = (e) => {
        e.preventDefault();
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
        .catch(console.warn)
        
    }

    return (
        <div className="container mt-5">
            <h1>Registro</h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Nombre"
                    className="form-control mt-3 mb-3"
                    name="userName"
                    id="userName"
                    autoComplete="off"
                />

                <input 
                    type="email"
                    placeholder="Email"
                    className="form-control mt-3 mb-3"
                    name="userEmail"
                    id="userEmail"
                    autoComplete="off"
                />

                <input 
                    type="text"
                    placeholder="Identificacion"
                    className="form-control mt-3 mb-3"
                    name="userDni"
                    id="userDni"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    className="form-control mt-3 mb-3"
                    id="userPassword"
                    name="userPassword"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Confirma Contraseña"
                    className="form-control mt-3 mb-3"
                    id="userConfPassword"
                    name="userConfPassword"
                    autoComplete="off"
                />

                <button
                    type="submit"
                    className="btn m-1 btn-block btn-outline-primary"
                >
                    Registrar
                </button>
            </form>

        </div>
    )
}
