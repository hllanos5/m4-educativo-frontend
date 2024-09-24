import React, { useState, useRef  } from "react";
import Layout from '../../shared/layout/Layout'
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { ToggleButton } from 'primereact/togglebutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function ExamenEditarProfesor() {   
    const [checked, setChecked] = useState(false);
    const toast = useRef(null);

    const aOpcion = [
        { name: 'Opcion 1', id: 1 },
        { name: 'Opcion 2', id: 2 },
        { name: 'Opcion 3', id: 3 },
        { name: 'Opcion 4', id: 4 }
    ];
    const [selectedPregunta2, setSelectedPregunta2] = useState(aOpcion[0]);

    const handleFinalizarExamen = ( )=>{
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

  return (
    <Layout>
        <div className='examen-editar-profesor'>
            <h1>Elementary</h1>
            <div className='fila'>
                <label htmlFor="pregunta1" className="negrita">Pregunta 1: </label>
                <InputText id="pregunta1"/>
            </div>
            <div className='fila'>
                <label htmlFor="pregunta2" className="negrita">Pregunta 2: </label>
                {aOpcion.map((opcion) => 
                <div key={opcion.id} className="seccion-opciones">
                    <RadioButton inputId={opcion.id} name="pregunta2" value={opcion} onChange={(e) => setSelectedPregunta2(e.value)} checked={selectedPregunta2.id === opcion.id} />
                    <label htmlFor={opcion.id} className="ml-2">{opcion.name}</label>
                </div>
                )}
            </div>
            <div className="fila">
                <label htmlFor="pregunta3" className="negrita">Graba un video hablando de los animales: </label>
                <ToggleButton onLabel="Detener Video ..." offLabel="Ver Video" onIcon="pi pi-stop-circle" offIcon="pi pi-play-circle" 
                checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <div className="fila">
                <Button label="Finalizar Edicion" severity="info" onClick={()=> handleFinalizarExamen()}/>
            </div>
        </div>
        <Toast ref={toast} />
    </Layout>
  )
}
