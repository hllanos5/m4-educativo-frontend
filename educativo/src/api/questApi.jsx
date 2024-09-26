import axios from "axios"

export const createQuestionSimple = async ({ type, question, answer, points, level }) => {
    const res = await axios.post('http://localhost:3000/api/questions', {
        type,
        question,
        answer,
        points,
        level
    })
    return res.data
}