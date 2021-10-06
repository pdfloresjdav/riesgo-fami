import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { CuentaScreen } from '../components/cuenta/CuentaScreen';
import { LenguaScreen } from '../components/lengua/LenguaScreen';
import CertificadosScreen from '../components/certificados/CertificadosScreen';
import { ProgresoScreen } from '../components/progreso/ProgresoScreen';
import { InformacionScreen } from '../components/informacion/InformacionScreen';

// DashboardRoute used to display Routes
export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                <Route exact path="/home" component={ HomeScreen } />
                <Route exact path="/cuenta" component={ CuentaScreen } />
                <Route exact path="/lengua" component={ LenguaScreen } />
                <Route exact path="/certificados" component={ CertificadosScreen } />
                <Route exact path="/progreso" component={ ProgresoScreen } />
                <Route exact path="/informacion" component={ InformacionScreen } />
                    {/* <Redirect to="/home" /> */}
                </Switch>
            </div>


        </>
    )
}
