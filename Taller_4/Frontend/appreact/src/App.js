import React , { useState, useEffect }  from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import MaterialDatatable from "material-datatable"; 

  //axios hace del cliente en este caso reemplaza al postman
  //material-ui sistemas de diseño
  //axios permite el cruce de datos de aplicaciones distintas
export default function App() {
  const { register, handleSubmit, errors } = useForm(); //formulario
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

 const onSubmit = data => {
  axios
  .post("http://localhost:4000/api/libro", data)
  .then(
    (response) => {
       console.log(response.data);
    }
   
  )
  .catch((error) => {
    console.log(error);
  });


}

 useEffect(() => {
    cargar();
  }, []);


  const cargar = async() =>{
    const { data } = await axios.get("http://localhost:5000/api/libro");
      //const { data } = await axios.get("/api/libro");
    console.log(data);
    setItem(data.animales);
    return null;
  }
  console.log(errors);
  
  return ( //return solo devuelve solo una etiqueta html
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="nombre_libro" name="nombre_libro" ref={register} />
      <input type="text" placeholder="autor" name="autor" ref={register} />
      <input type="number" placeholder="ano_publicacion" name="ano_publicacion" ref={register} />
      <input type="text" placeholder="idioma" name="idioma" ref={register} />

      <input type="submit" />
    </form>
  
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
