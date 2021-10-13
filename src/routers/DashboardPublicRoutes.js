import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StartScreen } from '../components/start/StartScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';


// DashboardRoute used to display Routes
export const DashboardPublicRoutes = () => {


    return (
        <Switch>
            <Route exact path="/" component={ StartScreen } />
            <Route exact path="/login" component={ LoginScreen } />
            <Route exact path="/registry" component={ RegisterScreen } />
            <Redirect to="/" />
        </Switch>
    )
}
