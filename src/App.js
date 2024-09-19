import logo from './logo.svg';
import './App.css';

function retornarNumeroAleatorio(){
  return Math.trunc(Math.random*10);
}
function App() {
  const siglo = 21;
  const persona ={
    nombre: 'Matías',
    edad: '28'
  }
  return (
    <div>
      <h1>Titulo nivel 1</h1>
      <hr />
      <p>Estamos en el siglo {siglo}</p>
      <hr />
      <p>Mi nombre es {persona.nombre} y mi edad {persona.edad}</p>
      <hr />
      <p>un numero aleatorio es </p>{retornarNumeroAleatorio()}

   </div>

  );
}

export default App;
