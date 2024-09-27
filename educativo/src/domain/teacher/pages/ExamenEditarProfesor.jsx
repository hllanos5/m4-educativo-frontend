import React, { useState, useRef, useEffect  } from "react";
import Layout from '../../shared/layout/Layout'
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { obtenerExamen } from "../../shared/api/examApi";
import { useParams } from 'react-router-dom';
import {listarCourse} from '../../shared/api/courseApi'


export default function ExamenEditarProfesor() {   
    const { id } = useParams();
    const toast = useRef(null);
    const [titulo, setTitulo] = useState('');    
    //Obtener el examen a modificar
    const {examen} = obtenerExamen({id});
    // Listar los cursos
    const {listado} = listarCourse();

    let aOpcion = [];
    listado?.data?.forEach((element)=>{
        aOpcion.push({id: element._id, name: element.name});
    })

    const [selectedNivel, setSelectedNivel] = useState(aOpcion[0]);
    
    
    const handleFinalizarExamen = ( )=>{
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const cargarDatos = ()=>{
        /*if(listado !== undefined){
            console.log("Hola");
            console.log(listado?.data);
        }
        
        listado.data.forEach((element, i) => {
            if(element.data._id === examen.data._id){
                setSelectedNivel[i];
            }
        })*/
    }

    useEffect(() => {
        setTitulo(examen?.data?.name)
        cargarDatos();

      }, [examen,listado]) 

  return (
    <Layout>
        <div className='examen-editar-profesor'>
            <h1>Elementary</h1>
            <div className="fila">
                    <label htmlFor="nombre" className="negrita">Titulo Examen: </label>
                    <InputText name="nombre" placeholder="Ingrese título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className='fila'>
                <label htmlFor="pregunta2" className="negrita">Elige nivel examen:</label>
                {aOpcion?.length> 0 && aOpcion.map((opcion) => 
                <div key={opcion.id} className="seccion-opciones">
                    <RadioButton inputId={opcion.id} name="pregunta2" value={opcion} onChange={(e) => setSelectedNivel(e.value)} checked={selectedNivel?.id === opcion?.id} />
                    <label htmlFor={opcion.id} className="ml-2">{opcion.name}</label>
                </div>
                )}
            </div>

            <div className='fila'>
                <label htmlFor="pregunta1" className="negrita">Pregunta 1: </label>
                <InputText id="pregunta1"/>
            </div>
            
            <div className="fila">
                <Button label="Finalizar Edicion" severity="info" onClick={()=> handleFinalizarExamen()}/>
            </div>
        </div>
        <Toast ref={toast} />
    </Layout>
  )
}

/*

*/ 