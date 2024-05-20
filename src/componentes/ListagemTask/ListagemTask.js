
function ListagemTask(props){

    return (
        <div className='row'>
            <div className="col-md-12">
                <h2>Lista de Tarefas</h2>
                <ul>
                    {props.tarefas.map(tarefa => (
                        <li key={tarefa.id}>
                            {`ID: ${tarefa.id}, Nome: ${tarefa.nome}, Tipo: ${tarefa.tipo}, Data: ${tarefa.dataCadastro}`}
                        </li>
                    ))}
                </ul>
            </div>
         </div>
      );
}

export default ListagemTask;