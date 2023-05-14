import React from 'react';
import './App.css';
import CrearElementoTitulo from './CrearElementoTitulo';
import InputyBoton from './InputyBoton';

function App() {
  return (
    <div className="App">
      <CrearElementoTitulo />
      <InputyBoton limite ='10'/>
    </div>
  );
}

export default App;
