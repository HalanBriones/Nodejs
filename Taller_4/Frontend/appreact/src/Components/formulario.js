import React   from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

  //axios hace del cliente en este caso reemplaza al postman
  //material-ui sistemas de diseño
  //axios permite el cruce de datos de aplicaciones distintas
export default function App() {
  const { register, handleSubmit, errors } = useForm(); //formulario



 const onSubmit = data => {
  axios
  .post("http://localhost:5000/api/libro", data)
  .then(
    (response) => {
       console.log(response.data);
    }
   
  )
  .catch((error) => {
    console.log(error);
  });
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
  </div>
 );
}
