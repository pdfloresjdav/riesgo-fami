import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { StartScreen } from '../components/start/StartScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { RegisterScreen } from '../components/register/RegisterScreen';


// DashboardRoute used to display Routes
export const DashboardPublicRoutes = () => {


    return (
        <Switch>
            <Route exact path="/auth" component={ StartScreen } />
            <Route exact path="/auth/login" component={ LoginScreen } />
            <Route exact path="/auth/registry" component={ RegisterScreen } />
            <Redirect to="/" />
        </Switch>
    )
}
