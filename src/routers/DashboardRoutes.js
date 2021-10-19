import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { AccountScreen } from '../components/account/AccountScreen';
import { LanguageScreen } from '../components/languages/LanguageScreen';
import CertificatesScreen from '../components/certificates/CertificatesScreen';
import { ProgressScreen } from '../components/progress/ProgressScreen';
import { InformationScreen } from '../components/information/InformationScreen';
import { UnitsScreen } from '../components/units/UnitsScreen';
import { CoursesScreen } from '../components/courses/CoursesScreen';
import { LessonsScreen } from '../components/lessons/LessonsScreen';

// DashboardRoute used to display Routes
export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                <Route exact path="/home" component={ HomeScreen } />
                <Route exact path="/account" component={ AccountScreen } />
                <Route exact path="/languages" component={ LanguageScreen } />
                <Route exact path="/certificates" component={ CertificatesScreen } />
                <Route exact path="/progress" component={ ProgressScreen } />
                <Route exact path="/information" component={ InformationScreen } />
                <Route exact path="/course/:cursoId" component={ CoursesScreen } />
                <Route exact path="/units/:cursoId" component={ UnitsScreen } />
                <Route exact path="/unit/:unitId" component={ LessonsScreen } />
                    <Redirect to="/home" />
                </Switch>
            </div>


        </>
    )
}
