import React, {useContext, useState, useRef, useCallback} from 'react'
import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";
import { useParams,useHistory, Link } from 'react-router-dom';
import  ListControlByUser  from '../../controllers/ListControlByUser';
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
    localStorage.setItem('courseId',cursoId);
    const course = (localStorage.getItem('course'))?JSON.parse(localStorage.getItem('course')):'';
    const imgCourse = (course.name_course==='RIESGOFAMI')?"/assets/IN_riesgof.png":process.env.REACT_APP_ADMIN_URL+course.image_course;
    const { loading, error, list, hasMore } = ListControlByUser(query, limit, path, pathType, cursoId);
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
        let count = lists.find((course) => {
                        if(course.state_name==='activo'){
                            if(course.status_approved==="pendiente"){
                                return course;
                            }
                        }       
                    });

        return lists.map((course) => (
            (course.state_name==='activo') ?
                    <div ref={handleObserver} key={course.id} className={(course.id===count.id)?"btn-unit-main-on":"btn-unit"}>
                            <Link 
                            to={(course.id===count.id || course.status_approved!=="pendiente")?`/unit/${course.id}`:"#"} 
                                className="lkn-next"
                            >
                                <div className="btn-unit-text">
                                {course.name_unit}
                                </div>
                                <div className={(course.id===count.id)?"btn-unit-on":(course.status_approved==="pendiente")?"btn-unit-pending":"btn-unit-ok"}></div>
                                   

                            </Link>
                    </div>
                    :null
                ));
        
    }
    
    return (
        <div className="content">
            <div className="text-title">{course && course.name_course}</div>

            
            <div className="fund-main-unit">
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
                
                <img src={imgCourse} alt={course.name_course} className="img-course" />
                {list && disCourse() }
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error!</p>}
                <div ref={loader} />
            </div>
        </div>
    )
}

