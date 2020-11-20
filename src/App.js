import React, {useState} from 'react';
import './App.css';
import Contador from './Contador';

const App = () => {

    const [contadores, setContadores] = useState([]);

    const addContador = () => {
        setContadores([...contadores, <Contador/>]);
    }

    const removeContador = () => {
        contadores.pop();
        setContadores([...contadores]);
    }

    return (
        <>
            <button className='btn btn-primary' onClick={addContador}>Agregar contador</button>
            <button className='btn btn-danger' onClick={removeContador}>Quitar contador</button>
            {
                contadores.length > 0 && contadores.map(el => el)
            }
        </>
    );
}

export default App;