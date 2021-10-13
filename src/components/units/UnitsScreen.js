import React, {useContext, useState, useRef, useCallback} from 'react'
import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";
import { useParams,useHistory, Link } from 'react-router-dom';
import  ListControl  from '../../controllers/ListControl';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// Home to display "Unidades"
export const UnitsScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [query, setQuery] = useState(0);
    const limit = 3;
    const { cursoId } = useParams();
    const path = 'course/units';
    const pathType = 'course_id';
    const course = (localStorage.getItem('course'))?JSON.parse(localStorage.getItem('course')):'';
    const { loading, error, list, hasMore } = ListControl(query, limit, path, pathType, cursoId);
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

    if(course===''){
        history.replace('/home');
    }

    const disCourse = ()=>{
        let lists = list;
        console.log(lists)
        return lists.map((course) => (
            (course.state_name==='activo') ?
                (course.name_course==='RIESGOFAMI') ?
                        <div ref={handleObserver} key={course.id}><Link to="/home"><img src="./assets/idRIESGOF.png" alt={course.name_course} className="img-course" /></Link></div>
                    :
                    <div ref={handleObserver} key={course.id}><Link to="/home"><img src={process.env.REACT_APP_ADMIN_URL+course.image_unit} alt={course.name_course} className="img-course" /></Link></div>
                    :null
                ));
        
    }
    
    return (
        <div className="content">
            <div className="text-title">{course && course.name_course}</div>

            
            <div className="fund-main-enter">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                        <BreadcrumbHome />
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <Link to={`/course/${cursoId}`}>
                        {course && course.name_course}
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem disableLink>
                        Unidades
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

