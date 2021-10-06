import React from 'react'

import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";

// Home to display "Cursos"
export const HomeScreen = () => {
    return (
        <div className="content">
            <div className="text-title">Cursos</div>

            
            <div className="fondo-main-ingreso">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="/home">
                        <BreadcrumbHome />
                        </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem href="#">
                        Breadcrumb 2
                    </BreadcrumbItem>
                    <BreadcrumbItem disableLink>
                        Breadcrumb 3
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    )
}
