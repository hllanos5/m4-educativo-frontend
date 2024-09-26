import React, { useContext } from 'react'
import { TieredMenu } from 'primereact/tieredmenu';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
export default function SideBar() {
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    let items = [];
    if(user?.role === 'student'){
        items = aMenuAlumno
    }
    else if(user?.role === 'teacher'){
        items = aMenuProfesor
    }

    return (
        <aside>
            <h4>Funval</h4>
            <TieredMenu model={items} breakpoint="767px" />
        </aside>
    )
}

const aMenuProfesor = [
    {
        label: 'Exámenes',
        icon: 'pi pi-file-edit',
        command: () => {
            navigate("/examen-profesor");
        }
    },
    {
        label: 'Mis Alumnos',
        icon: 'pi pi-users',
        command: () => {
            navigate("/alumnos-profesor");
        }
    },
    {
        label: 'Nuevo Examen',
        icon: 'pi pi-pencil',
        command: () => {
            navigate("/examen-crear-profesor");
        }
    }
];

const aMenuAlumno = [
    {
        label: 'Exámenes',
        icon: 'pi pi-file-edit',
        command: () => {
            navigate("/examen-alumno");
        }
    },
    {
        label: 'Mis Videos',
        icon: 'pi pi-video',
        command: () => {
            navigate("/videos-alumno");
        }
    }
]