import React, {useContext, useState, useRef, useCallback} from 'react'
import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";
import { useHistory, Link } from 'react-router-dom';
import  ListControl  from '../../controllers/ListControl';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
//import { Link } from "@wfp/ui";

// Home to display "Cursos"
export const HomeScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [query, setQuery] = useState(0);
    const limit = 3;
    const path = 'courses'
    const { loading, error, list, hasMore } = ListControl(query, limit, path);
    const loader = useRef(null);
    const observer = useRef()
    const handleObserver = useCallback((node) => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setQuery((prev) => prev + limit);
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore]);

    if(error){
        console.log(error)
        dispatch({
            type: types.logout
        });
        history.replace('/auth/login');
    }

    const disCourse = ()=>{
        let lists = list;
        localStorage.setItem('courses', JSON.stringify(lists));
        return lists.map((course) => (
            (course.state_name==='activo') ?
                (course.name_course==='RIESGOFAMI') ?
                        <div ref={handleObserver} key={course.id}><Link to={ `/course/${ course.id }` }><img src="./assets/idRIESGOF.png" alt={course.name_course} className="img-course" /></Link></div>
                    :
                    <div ref={handleObserver} key={course.id}><Link to={ `/course/${ course.id }` }><img src={process.env.REACT_APP_ADMIN_URL+course.image_course} alt={course.name_course} className="img-course" /></Link></div>
                    :null
        ));
        
    }
    
    return (
        <div className="content">
            <div className="text-title">Cursos</div>

            
            <div className="fund-main-enter">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                        <BreadcrumbHome />
                        </Link>
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

