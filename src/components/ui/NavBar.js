import React, { useContext } from 'react';
import { useHistory,Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import { Button,User } from "@wfp/ui";
  import {
    MainNavigation,
    MainNavigationItem,
    SubNavigation,
    SubNavigationHeader,
    SubNavigationLink
  } from "@wfp/ui";
// Navigation component
export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/auth/login');

        dispatch({
            type: types.logout
        });
    }


    return (
       
        <MainNavigation 
        logo={<div className="wfp--main-navigation__logo"><Link href="/home"><img src="/assets/idWFP.png" alt="menu logo" className="menu-img" /></Link><span className="menu-title">EDUFAMI</span></div>}
        >
            <MainNavigationItem>
                <Link 
                    to="/home"
                >
                Cursos
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    to="/account"
                >
                    Mis Datos
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    to="/lenguages"
                >
                    Mi Lengua 
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    to="/certificates"
                >
                    Mis Certificados 
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    to="/progress"
                >
                    Mi Progreso
                </Link>
            </MainNavigationItem>
            <hr className="dropdown-divider"/>
            <MainNavigationItem>
                <Link 
                    to="/information"
                >
                    Información EDUFAMI
                </Link>
            </MainNavigationItem>
            <MainNavigationItem
                className="wfp--main-navigation__user"
                subNavigation={
                <SubNavigation>
                    <SubNavigationHeader>
                        <SubNavigationLink>
                            <Button className="nav-item nav-link btn"
                                onClick={ handleLogout }
                            > 
                                Cerrar Sesión
                            </Button>
                        </SubNavigationLink>
                    </SubNavigationHeader>
                    
                </SubNavigation>
                }>
                <User
                ellipsis
                name={ name }
                missingImage="letter"
                />
            </MainNavigationItem>

        </MainNavigation>
    )
}
