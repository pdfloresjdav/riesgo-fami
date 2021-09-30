import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { CuentaScreen } from '../components/cuenta/CuentaScreen';
import { LenguaScreen } from '../components/lengua/LenguaScreen';
import CertificadosScreen from '../components/certificados/CertificadosScreen';
import { PregresoScreen } from '../components/progreso/PregresoScreen';
import { InformacionScreen } from '../components/informacion/InformacionScreen';


export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/cuenta" component={ CuentaScreen } />
                <Route exact path="/lengua" component={ LenguaScreen } />
                <Route exact path="/certificados" component={ CertificadosScreen } />
                <Route exact path="/progreso" component={ PregresoScreen } />
                <Route exact path="/informacion" component={ InformacionScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>


        </>
    )
}
