import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Table from './components/table';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <div>
      <Form botao={btnCadastrar}/>
      <Table />
    </div>
  );
}

export default App;
