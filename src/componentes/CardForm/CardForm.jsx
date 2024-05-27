import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CardForm.css';

function CardForm(props){

    // const [tarefas, setTarefas] = useState([]);
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [tipoTarefa, setTipoTarefa] = useState('I');

    const handleClickAddTarefa = () => {
        const dataCadastro = new Date();

        const novaTarefa = {
            id: uuidv4(), 
            nome: nomeTarefa,
            tipo: tipoTarefa,
            estado: "A FAZER",
            dataCadastro: dataCadastro
        };

        props.TarefaCadastrado(novaTarefa);


        setNomeTarefa('');
        setTipoTarefa('I');
      };

    return (
        < div id="main" className="d-flex justify-content-center align-items-center">
            <div className="card" style={{width: '30rem'}}>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id='nomeTarefa'
                        value={nomeTarefa}
                        onChange={(e) => setNomeTarefa(e.target.value)}
                        placeholder="Informe uma tarefa" />
                        <button className="btn btn-primary" onClick={handleClickAddTarefa} type="button">Add</button>
                    </div> 
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="form-check">
                                <input 
                                className="form-check-input" 
                                value='Importante' 
                                type="radio" 
                                name="radioPrioridade" 
                                id="radio1"
                                checked={tipoTarefa === 'I'} 
                                onChange={() => setTipoTarefa('I')}/> 
                                <label className="form-check-label" htmlFor="radio1">
                                    Importante
                                </label>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-check">
                                <input 
                                className="form-check-input" 
                                value='Priotário'
                                type="radio" 
                                name="radioPrioridade" 
                                id="radio2"  
                                checked={tipoTarefa === 'P'} 
                                onChange={() => setTipoTarefa('P')}/> 
                                <label className="form-check-label" htmlFor="radio2">
                                    Priotário
                                </label>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="form-check">
                            <input 
                            className="form-check-input" 
                            value='Urgente' 
                            type="radio" 
                            name="radioPrioridade" 
                            id="radio3" 
                            checked={tipoTarefa === 'U'} 
                            onChange={() => setTipoTarefa('U')}/>
                            <label className="form-check-label" htmlFor="radio3">
                                Urgente
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>
        
      );
}

export default CardForm;