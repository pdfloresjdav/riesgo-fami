import React, {useContext, useState, useRef, useCallback} from 'react'
import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";
import { useHistory } from 'react-router-dom';
import  ListCourses  from '../../controllers/ListCourses';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Link } from "@wfp/ui";

// Home to display "Cursos"
export const HomeScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [query, setQuery] = useState(0);
    const limit = 3;
    const { loading, error, list, hasMore } = ListCourses(query, limit);
    const loader = useRef(null);
    const observer = useRef()
    const handleObserver = useCallback((node) => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setQuery((prev) => prev + 3);
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore]);

    if(error){
        console.log(error)
        dispatch({
            type: types.logout
        });
        history.replace('/login');
    }

    const disCourse = ()=>{
        let lists = list;
        return lists.map((course) => (
            (course.state_name==='activo') ?
                (course.name_course==='RIESGOFAMI') ?
                        <div ref={handleObserver} key={course.id}><Link href="/home"><img src="./assets/idRIESGOF.png" alt={course.state_name} className="img-course" /></Link></div>
                    :
                    <div ref={handleObserver} key={course.id}><Link href="/home"><img src="./assets/idRIESGOF.png" alt={course.state_name} className="img-course" /></Link></div>
                    :<div ref={handleObserver} key={course.id}><Link href="/home"><img src="./assets/idRIESGOF.png" alt={course.state_name} className="img-course" /></Link></div>
                ));
        
    }
    
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
                <div className="content-courses" >
                {list && disCourse() }
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error!</p>}
                <div ref={loader} />
            </div>
        </div>
    )
}

