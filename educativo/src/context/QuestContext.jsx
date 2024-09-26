import { useMutation } from "@tanstack/react-query";
import { createContext } from "react";
import { createQuestionSimple } from "../api/questApi";

export const GrupalContext = createContext()


export const GrupalProvider = ({ children }) => {

    const createQSimpleMutation = useMutation({
        mutationKey: ['createQuestionSimple'],
        mutationFn: createQuestionSimple,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
        }
    })

    return (
        <GrupalContext.Provider value={{ createQSimpleMutation }}>
            {children}
        </GrupalContext.Provider>
    )
}