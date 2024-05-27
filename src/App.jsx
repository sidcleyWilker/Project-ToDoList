import {ThemeProvider, BaseStyles} from '@primer/react';
import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner/Banner';
import CardForm from './componentes/CardForm/CardForm';
import ListagemTask from './componentes/ListagemTask/ListagemTask';

const taf = [
  {
    id: '123', 
    nome: "tafe01",
    tipo: "I",
    estado: "A FAZER",
    dataCadastro: new Date()
  },
  {
    id: '12345', 
    nome: "tafe02",
    tipo: "P",
    estado: "A FAZER",
    dataCadastro: new Date()
  },
  {
    id: '12367', 
    nome: "tafe03",
    tipo: "U",
    estado: "A FAZER",
    dataCadastro: new Date()
  }

]

function App() {
  const [tarefas, setTarefas] = useState(taf);
  
  const novaTarefaCadastrado = (tarefa) =>{
    setTarefas([...tarefas,tarefa])
  }

  const removeTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const atualizarEstadoTarefa = (id, novoEstado) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, estado: novoEstado };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <Banner/>
      
      <CardForm 
      TarefaCadastrado={tarefa => novaTarefaCadastrado(tarefa)}
      />
      
      <ListagemTask 
      tarefas={tarefas}
      RemoverTarefa={id => removeTarefa(id)}
      AtualizarEstadoTarefa={(id, novoEstado) => atualizarEstadoTarefa(id, novoEstado)}
      />
    </div>
  );
}

export default App;
