import React, { useState, useRef  } from "react";
import Layout from '../../shared/layout/Layout'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';

export default function ExamenCrearProfesor() {

    const [selectedNivel, setSelectedNivel] = useState(null);
    const [selecteTipo, setSelectedTipo] = useState(null);
    const [addPreguntas, setAddPreguntas] = useState([]);
    let [contadorPreguntas, setContadorPreguntas] = useState(0);
    
    const aNivel = [
        { name: 'Elementary', id: 1 },
        { name: 'A1', id: 2 },
        { name: 'A2', id: 3 }
    ];

    const aTipo = [
        { name: 'Pregunta Simple', id: 1 },
        { name: 'Opcion multiple', id: 2},
        { name: 'Video', id: 3 }
    ];

    const handleAddInputPreguntas = () =>{
        setContadorPreguntas(contadorPreguntas +1)
        setAddPreguntas([... addPreguntas,{id: contadorPreguntas}]);

    }
    const handleCrearExamen = () => {
        alert("Crear Examen");
    }

  return (
    <Layout>
        <div className='examen-crear-profesor'>
            <h1>Crear Examen</h1>
            <div class="fila">
                <label htmlFor="nombre" className="negrita">Titulo: </label>
                <InputText  name="nombre" placeholder="Ingrese titulo"/>
            </div>
            <div className='fila'>
                <label htmlFor="Seleccione Nivel" className="negrita">Elige nivel exámen: </label>
                <ListBox value={selectedNivel} onChange={(e) => setSelectedNivel(e.value)} options={aNivel} optionLabel="name" />
            </div>
            <div className='fila'>
                <Button label="Agregar Pregunta" severity="info" onClick={()=> handleAddInputPreguntas()}/>
            </div>
            {
                addPreguntas.map((element) => 
                    <div className="seccion-preguntas">
                        <div>
                            <Dropdown value={selecteTipo} onChange={(e) => setSelectedTipo(e.value)} options={aTipo} optionLabel="name" placeholder="Seleccione Tipo" />
                        </div>
                        <div>
                            <InputText  name={`pregunta_${element.id}`} placeholder={`Ingrese pregunta ${element.id +1}`}/>
                        </div>
                        <div>
                            <InputText  name={`respuesta_${element.id}`} placeholder={`Ingrese respuesta ${element.id +1}`}/>
                        </div>
                        <div>
                            <InputText  name={`puntaje_${element.id}`} placeholder={`Ingrese Puntaje ${element.id +1}`}/>
                        </div>
                    </div>
                )
            }

            {
                addPreguntas.length> 0 && 
                <div className='fila'>
                    <Button label="Crear Examen" severity="success" onClick={()=> handleCrearExamen()}/>
                </div>
            }
        </div>    
    </Layout>
  )
}
