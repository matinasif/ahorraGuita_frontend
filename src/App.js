import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  /*function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10 );
    setValor(v);
  }*/
   
   
   /* function generarAleatorios() {
    const vector = new Array (5); 
    for (let i = 0; i < vector.length ; i++) {
     vector[i] = Math.trunc(Math.random()*10);
     setNumeros(vector)
    }
    }

  const [numeros,setNumeros] = useState([0, 0, 0, 0, 0])
  return (
    <div>
      <p>El numeros aleatorios</p>
      {numeros.map(num =>(
        <p>{num}</p>
      ))}
      <button onClick = {generarAleatorios}>Generar número Aleatorio</button>
    </div>
  );*/
function eliminarUltimaFila(){
  if(articulos.length > 0) { 
    const temp = Array.from(articulos);
    temp.pop();
    setArticulos(temp)
  }
}
  
  const [articulos,setArticulos] = useState([
    {
      codigo : 1,
      descripcion : 'papas',
      precio : 12.42
    },
    {
      codigo : 2,
      descripcion : 'naranjas',
      precio : 21
    },
    {
      codigo : 3,
      descripcion : 'peras',
      precio : 18.90
    },

  ]);
  return(
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>descripcion</th>
            <th>Precio</th>
          </tr>
          </thead>
          <tbody>
            {articulos.map( art => {
              return(
                <tr key={art.codigo}>
                  <td>{art.codigo}</td>
                  <td>{art.descripcion}</td>
                  <td>{art.precio}</td>

                </tr>
              )
            })}
          </tbody>
      </table>
      <button onClick={ eliminarUltimaFila }>Eliminar ultima fila</button>
    </div>
  )
}

export default App;
