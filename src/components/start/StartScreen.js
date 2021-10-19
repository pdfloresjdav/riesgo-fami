import React from 'react';
import { FooterMain } from '../footer/FooterMain';
import { Link } from 'react-router-dom';

// Start Page Component
export const StartScreen = () => {
    const hadlePress = (e) => {
        e.currentTarget.classList.remove("btn-wfp-main");
        e.currentTarget.classList.add("btn-wfp-main-press");
    };
    return (
        <div className="fund-start">
            <img src="./assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-main">
                Aprender con Edufami es muy facil
                <br/>
                Inicie su formacion Ahora
                <br/>
                <br/>
                <Link 
                to="/auth/login" 
                className="btn m-1 btn-block btn-outline-primary btn-wfp-main"
                onClick={hadlePress}
                >
                    Ingresar
                </Link>
            </div>
            
            <FooterMain />
        </div>
    )
}
