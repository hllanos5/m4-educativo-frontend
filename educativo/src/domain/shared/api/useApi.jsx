import { useEffect, useState } from 'react'
import axios from 'axios'
export const useApi = () => {
    const [user, setUser] = useState([])
    const getUser = async () => {
        try {
            const rs = await axios.get('http://localhost:3000/api/users/66f5b8cfb8d593e98e8741b1')
            setUser(rs.data)
        } catch (error) { console.error(error.message) }
    }
    useEffect(() => { getUser() }, [])
    return { user }
}
