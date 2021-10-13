import React, {useContext, useState, useEffect} from 'react'
import { Breadcrumb , BreadcrumbHome, BreadcrumbItem } from "@wfp/ui";
import { useParams,useHistory,Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Button } from "@wfp/ui";

// Home to display "Curso"
export const CoursesScreen = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const [cursoNombre, setCursoNombre] = useState('');
    const [imgCourse, setImgCourse] = useState('');
    const { cursoId } = useParams();
    const list = JSON.parse(localStorage.getItem('courses'));
    let course = ''

    if(!list){
        dispatch({
           type: types.logout
        });
        history.replace('/home');
    }
    useEffect(() => {
        if(course!==undefined){
            setCursoNombre(course.name_course);
            setImgCourse( (course.name_course==='RIESGOFAMI')?"/assets/IN_riesgof.png":process.env.REACT_APP_ADMIN_URL+course.image_course);
            localStorage.setItem('course', JSON.stringify(course));
        }
        else{
            history.replace('/home');
        }
        
      }, [course]);

    const disCourse = ()=>{
        course = list.find(o => o.id == cursoId);
        return (course)?
            <div key={course.id} >
                <img src={imgCourse} alt={course.name_course} className="img-course" />
                <div className="course-description">{course.description_course}
                    <div className="course-enter">
                        <Link to={ `/units/${ course.id }` }>
                            <Button
                                    id="btnIngresar"
                                    type="submit"
                                    className="btn m-1 btn-block btn-wfp-main"
                                >
                                    Ingresar
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            :null;
        
    }
    
    return (
        <div className="content">
            <div className="text-title">{cursoNombre}</div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                        <BreadcrumbHome />
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem disableLink>
                        {cursoNombre}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="fund-main-course">
                <div className="content-course" >
                {list && disCourse() }
                </div>
            </div>
        </div>
    )
}

