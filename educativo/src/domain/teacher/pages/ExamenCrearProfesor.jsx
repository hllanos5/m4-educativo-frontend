import React, { useContext, useState } from "react"
import Layout from '../../shared/layout/Layout'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from "primereact/inputtext"
import { ListBox } from 'primereact/listbox'
import { Button } from 'primereact/button'
import { GrupalContext } from "../../shared/context/QuestContext"

export default function ExamenCrearProfesor() {
    const { createQSimpleMutation } = useContext(GrupalContext)

    const [selectedNivel, setSelectedNivel] = useState(null)
    const [addPreguntas, setAddPreguntas] = useState([])
    let [contadorPreguntas, setContadorPreguntas] = useState(0)

    const handleQSimple = async (e, pregunta) => {
        e.preventDefault()
        const data = {
            question: pregunta.pregunta,
            answer: pregunta.respuesta,
            points: pregunta.puntaje,
            level: selectedNivel ? selectedNivel.name : null,
            type: pregunta.tipo && pregunta.tipo.name === 'Pregunta Simple' ? 'simple' :
                pregunta.tipo && pregunta.tipo.name === 'Opcion multiple' ? 'multiple' :
                    pregunta.tipo && pregunta.tipo.name === 'Video' ? 'video' :
                        'DefaultType'
        }
        await createQSimpleMutation.mutate(data)
    }

    const aNivel = [
        { name: 'Elementary', id: 1 },
        { name: 'A1', id: 2 },
        { name: 'A2', id: 3 }
    ]

    const aTipo = [
        { name: 'Pregunta Simple', id: 1 },
        { name: 'Opcion multiple', id: 2 },
        { name: 'Video', id: 3 }
    ]

    const handleAddInputPreguntas = () => {
        setContadorPreguntas(contadorPreguntas + 1)
        setAddPreguntas([...addPreguntas, { id: contadorPreguntas, tipo: null, pregunta: "", respuesta: "", puntaje: "" }])
    }

    const handleTipoChange = (e, id) => {
        const updatedPreguntas = addPreguntas.map(p =>
            p.id === id ? { ...p, tipo: e.value } : p
        )
        setAddPreguntas(updatedPreguntas)
    }

    const handleInputChange = (e, id, field) => {
        const updatedPreguntas = addPreguntas.map(p =>
            p.id === id ? { ...p, [field]: e.target.value } : p
        )
        setAddPreguntas(updatedPreguntas)
    };

    const handleCrearExamen = () => {
        alert("Crear Examen")
        console.log(addPreguntas)
    }

    return (
        <Layout>
            <div className='examen-crear-profesor'>
                <h1>Crear Examen</h1>
                <div className="fila">
                    <label htmlFor="nombre" className="negrita">Titulo: </label>
                    <InputText name="nombre" placeholder="Ingrese título" />
                </div>
                <div className='fila'>
                    <label htmlFor="Seleccione Nivel" className="negrita">Elige nivel examen: </label>
                    <ListBox value={selectedNivel} onChange={(e) => setSelectedNivel(e.value)} options={aNivel} optionLabel="name" />
                </div>
                <div className='fila'>
                    <Button label="Agregar Pregunta" severity="info" onClick={handleAddInputPreguntas} />
                </div>
                {
                    addPreguntas.map((element) =>
                        <div key={element.id} className="seccion-preguntas">
                            <div>
                                <Dropdown
                                    value={element.tipo}
                                    onChange={(e) => handleTipoChange(e, element.id)}
                                    options={aTipo}
                                    optionLabel="name"
                                    placeholder="Seleccione Tipo"
                                />
                            </div>
                            <div>
                                <InputText
                                    value={element.pregunta}
                                    onChange={(e) => handleInputChange(e, element.id, 'pregunta')}
                                    placeholder={`Ingrese pregunta ${element.id + 1}`}
                                />
                            </div>
                            <div>
                                <InputText
                                    value={element.respuesta}
                                    onChange={(e) => handleInputChange(e, element.id, 'respuesta')}
                                    placeholder={`Ingrese respuesta ${element.id + 1}`}
                                />
                            </div>
                            <div>
                                <InputText
                                    value={element.puntaje}
                                    onChange={(e) => handleInputChange(e, element.id, 'puntaje')}
                                    placeholder={`Ingrese Puntaje ${element.id + 1}`}
                                />
                            </div>
                            <button
                                onClick={(e) => handleQSimple(e, element)}>
                                Save Question
                            </button>
                        </div>
                    )
                }
                {
                    addPreguntas.length > 0 &&
                    <div className='fila'>
                        <Button label="Crear Examen" severity="success" onClick={handleCrearExamen} />
                    </div>
                }
            </div>
        </Layout>
    );
}
