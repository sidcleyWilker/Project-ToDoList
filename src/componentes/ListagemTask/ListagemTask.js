
import './ListagemTask.css';
import { format } from 'date-fns';

function ListagemTask(props){
    const getCardClass = (tipo) => {
        switch (tipo) {
            case 'I':
                return 'bg-info text-white'; // Azul claro
            case 'P':
                return 'bg-success text-white'; // Verde claro
            case 'U':
                return 'bg-danger text-white'; 
            default:
                return {};
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'HH:mm:ss');
    };

    return (
        // <div className='row'>
        //     <div className="col-md-12">
        //         <h2>Lista de Tarefas</h2>
        //         <ul>
        //             {props.tarefas.map(tarefa => (
        //                 <li key={tarefa.id}>
        //                     {`ID: ${tarefa.id}, Nome: ${tarefa.nome}, Tipo: ${tarefa.tipo}, Data: ${tarefa.dataCadastro}`}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        //  </div>
        <div className="notas" >
                {props.tarefas.map(taref => (
                    <div key={taref.id} className={`${getCardClass(taref.tipo)} nota`}>
                        <div className='head'>
                            <span className='item'>V</span>
                            <span className='item'>X</span>
                        </div>
                        <div  className='body'>
                            <p className="card-text">{taref.nome}</p>
                        </div>
                        <div className='footer'>
                            <span className='item'>{formatDate(taref.dataCadastro)}</span>
                            <span className='item'>{formatTime(taref.dataCadastro)}</span>
                        </div>
                    </div>
                ))}
        </div>
      );
}

export default ListagemTask;