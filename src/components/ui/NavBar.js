import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

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
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container-fluid">
    //       <a className="navbar-brand" href="#">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">Mis Datos</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Mi Lenguaje</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Mis Certificados</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Mi PROGRESO</a>
    //           </li>
    //           <li><hr className="dropdown-divider"/></li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Informacion EDUFAMI</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/home"
                >
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link active" 
                                aria-current="page"
                                exact
                                to="/cuenta"
                            >
                                Mis Datos
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                aria-current="page"
                                exact
                                to="/lengua"
                            >
                                Mi Lengua
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                aria-current="page"
                                exact
                                to="/certificados"
                            >
                                Mis Certificados
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                aria-current="page"
                                exact
                                to="/progreso"
                            >
                                Mi Progreso
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                aria-current="page"
                                exact
                                to="/informacion"
                            >
                                Información EDUFAMI
                            </NavLink>
                        </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li className="nav-item">

                            <span className="nav-item nav-link text-info"> 
                                { name }
                            </span>

                            <button 
                                className="nav-item nav-link btn"
                                onClick={ handleLogout }
                            > 
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
