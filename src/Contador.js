import React, {useEffect, useState} from 'react';
import './Contador.css';
import Header from './Header';


//Componentes tipo 1. clases(Con estado) y 2. funciones(Sin estado)

//1. Tipo clase
/* class App extends React.Component {
   
  //Donde va el codigo en si
  render(){
    return (
    <div>
      Segundo dia
    </div>
    );
  }

  //Métodos para manejar el ciclo de vida
  //Se ejecuta una vez se carga el componente en render
  componentDidMount(){
    console.log("Cargado");
  }

  //Se ejecuta antes de que se cargue el componente en render
  componentWillMount(){
    console.log("Será montado");
  }

  //Se ejecuta cada vez que se actualiza
  componentDidUpdate(){
    console.log("Será actualizado");
  }
}

export default App; */

//2. Tipo Funcion

const Contador = () => {

  //Manejar estado, con useState
  const [contador, setContador] = useState(0);

  useEffect(()=>{
    //Para manejar el ciclo de vida
  });

  return (
    <div className='container'>
      <Header contador={contador}/>
      <div className='button-container'>
        <button className='btn btn-primary' onClick={() => setContador(contador + 1)}>+ (Sumar)</button>
        <button className='btn btn-danger' onClick={() => setContador(contador - 1)}>- (Restar)</button>
      </div>

    </div>
  );
}

export default Contador;