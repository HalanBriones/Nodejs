import React , { useState, useEffect }  from "react";
import axios from 'axios';
import MaterialDatatable from "material-datatable"; 

  //axios hace del cliente en este caso reemplaza al postman
  //material-ui sistemas de diseño
  //axios permite el cruce de datos de aplicaciones distintas
export default function App() {
  const [item, setItem] = useState([]); 

  //definir columnas de la tabla
  const columns = [
  {
     name: "Nombre Libro",
     field: "nombre_libro",
     options: {
      filter: true,
      sort: true,
     }
  },
  {
     name: "Autor",
     field: "autor",
     options: {
      filter: true,
      sort: false,
      }
  },
  {
      name: "Año Publición",
      field: "ano_publicacion",
      options: {
      filter: true,
      sort: false,
      }
  },
  {
      name: "Idioma",
      field: "idioma",
      options: {
      filter: true,
      sort: false,
      }
  }
 ];

 useEffect(() => {
    cargar();
  }, []);


  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/libro");
      //const { data } = await axios.get("/api/libro");
    console.log(data);
    setItem(data.libro);
    return null;
  }
 
  
  return ( //return solo devuelve solo una etiqueta html
   <div>  
  <MaterialDatatable
  title={"Libros"}
  data={item}
  columns={columns}
  options={{
    selectableRows: false,
    print: false,
    onlyOneRowCanBeSelected: false,
    textLabels: {
      body: {
        noMatch: "Lo sentimos, no se encuentran registros",
        toolTip: "Sort",
      },
      pagination: {
        next: "Siguiente",
        previous: "Página Anterior",
        rowsPerPage: "Filas por página:",
        displayRows: "de",
      },
    },
    download: false,
    pagination: true,
    rowsPerPage: 5,
    usePaperPlaceholder: true,
    rowsPerPageOptions: [5, 10, 25],
    sortColumnDirection: "desc",
  }}

  />
  </div>
   );
}
