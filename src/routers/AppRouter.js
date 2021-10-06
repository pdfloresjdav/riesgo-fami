import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { RegisterScreen } from '../components/register/RegisterScreen';
import { InicioScreen } from '../components/inicio/InicioScreen';

// Main App Route to display all routes
export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/" 
                        component={ InicioScreen } 
                        isAuthenticated={ user.logged }
                    />

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />

                    <PublicRoute 
                        exact 
                        path="/registro" 
                        component={ RegisterScreen } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/home" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                    <PrivateRoute 
                        path="/cuenta" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
