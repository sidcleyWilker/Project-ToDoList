import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import CardForm from './componentes/CardForm/CardForm';
import ListagemTask from './componentes/ListagemTask/ListagemTask';


function App() {
  const taf = [
    {
      id: '123', 
      nome: "tafe01",
      tipo: "I",
      dataCadastro: new Date()
    },
    {
      id: '12345', 
      nome: "tafe02",
      tipo: "P",
      dataCadastro: new Date()
    },
    {
      id: '12367', 
      nome: "tafe03",
      tipo: "U",
      dataCadastro: new Date()
    }

  ]
  const [tarefas, setTarefas] = useState(taf);
  
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
