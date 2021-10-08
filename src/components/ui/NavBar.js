import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import { Button,User, Search } from "@wfp/ui";
  import {
    MainNavigation,
    MainNavigationItem,
    SubNavigation,
    SubNavigationHeader,
    SubNavigationTitle,
    SubNavigationLink,
    Link
  } from "@wfp/ui";
// Navigation component
export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }


    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <Link 
        //             className="navbar-brand" 
        //             to="/home"
        //         >
        //             Home
        //         </Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        //                 <li className="nav-item">
        //                     <NavLink 
        //                         activeClassName="active"
        //                         className="nav-item nav-link active" 
        //                         aria-current="page"
        //                         exact
        //                         to="/cuenta"
        //                     >
        //                         Mis Datos
        //                     </NavLink>
        //                 </li>

        //                 <li className="nav-item">
        //                     <NavLink 
        //                         activeClassName="active"
        //                         className="nav-item nav-link" 
        //                         aria-current="page"
        //                         exact
        //                         to="/lengua"
        //                     >
        //                         Mi Lengua
        //                     </NavLink>
        //                 </li>

        //                 <li className="nav-item">
        //                     <NavLink 
        //                         activeClassName="active"
        //                         className="nav-item nav-link" 
        //                         aria-current="page"
        //                         exact
        //                         to="/certificados"
        //                     >
        //                         Mis Certificados
        //                     </NavLink>
        //                 </li>

        //                 <li className="nav-item">
        //                     <NavLink 
        //                         activeClassName="active"
        //                         className="nav-item nav-link" 
        //                         aria-current="page"
        //                         exact
        //                         to="/progreso"
        //                     >
        //                         Mi Progreso
        //                     </NavLink>
        //                 </li>

        //                 <li className="nav-item">
        //                     <NavLink 
        //                         activeClassName="active"
        //                         className="nav-item nav-link" 
        //                         aria-current="page"
        //                         exact
        //                         to="/informacion"
        //                     >
        //                         Información EDUFAMI
        //                     </NavLink>
        //                 </li>
        //                 <li><hr className="dropdown-divider"/></li>
        //                 <li className="nav-item">

        //                     <span className="nav-item nav-link text-info"> 
        //                         { name }
        //                     </span>

        //                     <button 
        //                         className="nav-item nav-link btn"
        //                         onClick={ handleLogout }
        //                     > 
        //                         Cerrar Sesión
        //                     </button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <MainNavigation 
        logo={<div className="wfp--main-navigation__logo"><Link href="/home"><img src="./assets/idWFP.png" alt="menu logo" className="menu-img" /></Link><span className="menu-title">EDUFAMI</span></div>}
        >
            <MainNavigationItem>
                <Link 
                    href="/home"
                >
                Cursos
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    href="/cuenta"
                >
                    Mis Datos
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    href="/lengua"
                >
                    Mi Lengua 
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    href="/certificados"
                >
                    Mis Certificados 
                </Link>
            </MainNavigationItem>
            <MainNavigationItem>
                <Link 
                    href="/progreso"
                >
                    Mi Progreso
                </Link>
            </MainNavigationItem>
            <hr className="dropdown-divider"/>
            <MainNavigationItem>
                <Link 
                    href="/informacion"
                >
                    Información EDUFAMI
                </Link>
            </MainNavigationItem>
            {/* <MainNavigationItem>
                <Search
                kind="main"
                id="search-2"
                placeHolderText="Search"
                />
            </MainNavigationItem> */}
            <MainNavigationItem
                className="wfp--main-navigation__user"
                subNavigation={
                <SubNavigation>
                    <SubNavigationHeader>
                        {/* <SubNavigationTitle>{ name ? name : '' }!</SubNavigationTitle> */}
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
