import React, { useState, useEffect } from 'react';
import Layout from '../../shared/layout/Layout'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ListadoAlumnos() {
    const [alumnos, setAlumnos] = useState([]);
    
    
    useEffect(() => {
        setAlumnos(data);
    }, []);

  return (
    <Layout>
        <div className='listado-alumnos-profesor'>
            <h1>Listado de Alumnos</h1>           
            <DataTable value={alumnos} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="id" header="id" style={{ width: '25%' }}></Column>
                <Column field="nombres" header="nombres" style={{ width: '25%' }}></Column>
                <Column field="apellidos" header="apellidos" style={{ width: '25%' }}></Column>
                <Column field="email" header="email" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    </Layout>
  )
}


const data = [
    {
        id: 1,
        nombres: "Olivette",
        apellidos: "Delacote",
        email: "odelacote0@ustream.tv"
      }, {
        id: 2,
        nombres: "Tobiah",
        apellidos: "Handmore",
        email: "thandmore1@cocolog-nifty.com"
      }, {
        id: 3,
        nombres: "Kessiah",
        apellidos: "Dik",
        email: "kdik2@lulu.com"
      }, {
        id: 4,
        nombres: "Evanne",
        apellidos: "Herity",
        email: "eherity3@e-recht24.de"
      }, {
        id: 5,
        nombres: "Deanne",
        apellidos: "Risebarer",
        email: "drisebarer4@moonfruit.com"
      }, {
        id: 6,
        nombres: "Flin",
        apellidos: "Akast",
        email: "fakast5@mediafire.com"
      }, {
        id: 7,
        nombres: "Felicdad",
        apellidos: "Longina",
        email: "flongina6@stumbleupon.com"
      }, {
        id: 8,
        nombres: "Sheff",
        apellidos: "Marsden",
        email: "smarsden7@ted.com"
      }, {
        id: 9,
        nombres: "Kerrill",
        apellidos: "Balch",
        email: "kbalch8@hexun.com"
      }, {
        id: 10,
        nombres: "Lazarus",
        apellidos: "Medeway",
        email: "lmedeway9@theguardian.com"
      }, {
        id: 11,
        nombres: "Persis",
        apellidos: "Archell",
        email: "parchella@state.tx.us"
      }, {
        id: 12,
        nombres: "Adolphus",
        apellidos: "Harford",
        email: "aharfordb@mtv.com"
      }, {
        id: 13,
        nombres: "Hewitt",
        apellidos: "Hayne",
        email: "hhaynec@rediff.com"
      }, {
        id: 14,
        nombres: "Ileana",
        apellidos: "Courtois",
        email: "icourtoisd@uol.com.br"
      }, {
        id: 15,
        nombres: "Kania",
        apellidos: "Yanele",
        email: "kyanelee@ow.ly"
      }, {
        id: 16,
        nombres: "Faith",
        apellidos: "Tonnesen",
        email: "ftonnesenf@istockphoto.com"
      }, {
        id: 17,
        nombres: "Wendeline",
        apellidos: "Walkden",
        email: "wwalkdeng@senate.gov"
      }, {
        id: 18,
        nombres: "Denise",
        apellidos: "Pizey",
        email: "dpizeyh@booking.com"
      }, {
        id: 19,
        nombres: "Dareen",
        apellidos: "Itzchaky",
        email: "ditzchakyi@csmonitor.com"
      }, {
        id: 20,
        nombres: "Blondie",
        apellidos: "Neary",
        email: "bnearyj@360.cn"
      }
]
