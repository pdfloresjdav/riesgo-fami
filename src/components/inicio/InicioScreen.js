import React from 'react'
import { FooterMain } from '../footer/FooterMain'

export const InicioScreen = () => {
    const hadlePress = (e) => {
        e.currentTarget.classList.remove("btn-wfp-main");
        e.currentTarget.classList.add("btn-wfp-main-press");
    };
    return (
        <div className="fondo-main">
            <img src="./assets/idEDUF.png" alt="header" className="img-head"/>
            <div className="text-main">
                Aprender con Edufami es muy facil
                <br/>
                Inicie su formacion Ahora
                <br/>
                <a 
                href="/login" 
                className="btn m-1 btn-block btn-outline-primary btn-wfp-main"
                onClick={hadlePress}
                >
                    Ingresar
                </a>
            </div>
            
            <FooterMain />
        </div>
    )
}
