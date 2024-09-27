import React from 'react';
import Layout from '../../shared/layout/Layout'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { listarExamenes } from '../../shared/api/examApi';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";


export default function ListadoExamenProfesor() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {listado} = listarExamenes();
    
    const filtro = listado?.data?.filter(obj => obj.courses === id);

    const bodyTemplate = (rowData) => {
      
      return (
        <span  className="identificador" onClick={() => navigate(`/examen-editar-profesor/${rowData._id}`)}>
            {rowData._id}
        </span>
    );
    };
    
  return (
    <Layout>
        <div className='listado-examen-profesor'>
            <h1>Listado Examenes</h1>           
            <DataTable value={filtro} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="_id" header="id" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="name" header="nombre" style={{ width: '25%' }}></Column>
                <Column field="maxScore" header="puntaje" style={{ width: '25%' }}></Column>
                <Column field="time" header="tiempo" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    </Layout>
  )
}
