import { useEffect, useState } from 'react'
import axios from 'axios'

export const listarExamenes = () => {
    const [listado, setListado] = useState([])
    
    const getListado = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/exams`);
            setListado(res.data)
        } catch (error) { console.error(error.message) }
    }

    useEffect(() => { getListado() }, [])
    return { listado }
}

export const obtenerExamen = ({id}) => {
    const [examen, setExamen] = useState({})

    const getExamen = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/exams/${id}`);
            setExamen(res.data)
        } catch (error) { console.error(error.message) }
    }

    useEffect(() => { getExamen() }, [])
    return { examen }
}