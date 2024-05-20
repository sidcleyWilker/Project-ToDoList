import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import CardForm from './componentes/CardForm/CardForm';
import ListagemTask from './componentes/ListagemTask/ListagemTask';


function App() {
  const [tarefas, setTarefas] = useState([]);
  
  const novaTarefaCadastrado = (tarefa) =>{
    setTarefas([...tarefas,tarefa])
  }

  return (
    <div className="App">
      <Banner/>
      <CardForm TarefaCadastrado={tarefa => novaTarefaCadastrado(tarefa)}/>
      <ListagemTask tarefas={tarefas}/>
    </div>
  );
}

export default App;
