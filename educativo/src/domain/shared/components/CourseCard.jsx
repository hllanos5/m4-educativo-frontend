import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";

function CourseCard({id, nombre}) {
    const setLocation = useNavigate();
    return (
        
        <div className="card" onClick={() => setLocation(`/course/${id}`)}>
            <p>{nombre}</p>
        </div>
    )
    
}

CourseCard.prototypes = {
    id: PropTypes.any.isRequired,
    nombre: PropTypes.string.isRequired
}


export default CourseCard