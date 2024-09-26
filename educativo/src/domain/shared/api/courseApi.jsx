import { useEffect, useState } from 'react'
import axios from 'axios'

export const listarCourse = () => {
    const [listado, setListado] = useState([])
    
    const getListado = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/courses`);
            setListado(res.data)
        } catch (error) { console.error(error.message) }
    }

    useEffect(() => { getListado() }, [])
    return { listado }
}
