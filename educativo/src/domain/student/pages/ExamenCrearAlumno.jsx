import React, { useState, useRef, useContext, useEffect  } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Layout from '../../shared/layout/Layout'
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import  useExamen  from "../../shared/services/useExamen" 

export default function ExamenCrearAlumno() {
    const [checked, setChecked] = useState(false);
    const toast = useRef(null);

    const aOpcion = [];
    const [preguntaSimpleRespuesta, setPreguntaSimpleRespuesta] = useState('');
    const [selectedPregunta2, setSelectedPregunta2] = useState(aOpcion[0]);

    const handleFinalizarExamen = async( )=>{
        const results = {
            userId,
            examId,
            answer:[
                {question: 'Pregunta 1',answer: pregunta1Respuesta},
                {question: 'Pregunta 2',answer: selectedPregunta2.id}
            ]
        }
        try {
            const rs= await axios.post('http://localhost:3000/api/results', results)
            console.log(rs.data);
            toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
        } catch (error) {
            console.error(error.message);
            toast.current.show({severity:'warn', summary: 'Error', detail:'Hubo un error al enviar los resultados', life: 3000});
        }
    }

    //Cargando data para las preguntas
    const { id } = useParams();
    const { examen, isExamenLoading } = useExamen({ examenId: id });

    if (isExamenLoading) {
        return <div>Cargando ...</div>;
    }

    /*console.log();
    examen.data.questions.forEach((element)=>{
        element.options.forEach((obj)=>{
         console.log(obj);
        })
    })*/


  return (
    <Layout>
        <div className='examen-crear-alumno'>
            <h1>{examen.data.name}</h1>
            {
                examen.data.questions.map((obj, i)=> {
                    if(obj.type==='simple'){
                        return (
                            <div className='fila' key={i}>
                                <label htmlFor={`pregunta_${i}`} className="negrita">Pregunta {i+1}: {obj.question} </label>
                                <InputText id={`pregunta_${i}`} value={preguntaSimpleRespuesta} onChange={e=>setPreguntaSimpleRespuesta(e.target.value)}/>
                            </div>
                        )
                    }
                    if(obj.type === 'multiple'){
                        let titulo = obj.question;
                        return (
                            <div className='fila'>
                                <label htmlFor="pregunta2" className="negrita">Pregunta 2: {titulo} </label>
                            </div>
                        )
                        /*return (
                            <div className='fila'>
                            <label htmlFor="pregunta2" className="negrita">Pregunta 2: {titulo} </label>
                                {aOpcion.map((opcion) => 
                                <div key={opcion.id} className="seccion-opciones">
                                    <RadioButton inputId={opcion.id} name="pregunta2" value={opcion} />
                                    <label className="ml-2">{opcion.name}</label>
                                </div>
                                )}
                            </div>
                        )*/
                    }
                })
            }
            
            
            <div className="fila">
                <label htmlFor="pregunta3" className="negrita">Graba un video hablando de los animales: </label>
                <ToggleButton onLabel="Grabando ..." offLabel="Iniciar Grabación" onIcon="pi pi-stop-circle" offIcon="pi pi-play-circle" 
                checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <div className="fila">
                <Button label="Finalizar Examen" severity="info" onClick={()=> handleFinalizarExamen()}/>
            </div>
        </div>
        <Toast ref={toast} />
    </Layout>
  )
}

/*
<div className='fila'>
                <label htmlFor="pregunta2" className="negrita">Pregunta 2: </label>
                {aOpcion.map((opcion) => 
                <div key={opcion.id} className="seccion-opciones">
                    <RadioButton inputId={opcion.id} name="pregunta2" value={opcion} onChange={(e) => setSelectedPregunta2(e.value)} checked={selectedPregunta2.id === opcion.id} />
                    <label htmlFor={opcion.id} className="ml-2">{opcion.name}</label>
                </div>
                )}
            </div>
 */