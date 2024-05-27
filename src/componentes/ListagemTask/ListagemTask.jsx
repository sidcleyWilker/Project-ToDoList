
import './ListagemTask.css';
import { format } from 'date-fns';
import {XIcon} from '@primer/octicons-react'
import {CheckCircleIcon} from '@primer/octicons-react'

function ListagemTask(props){
    const getCardClass = (taf) => {
        if(taf.estado === 'CONCLUIDO'){
            return 'cinza';
        }

        if(taf.tipo === 'I'){
            return 'azul';
        }else if (taf.tipo === 'P'){
            return 'verde';
        }else if (taf.tipo === 'U'){
            return 'vermelho';
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

    const handleClickRemoverTarefa = (id) => {
        props.RemoverTarefa(id);
    }

    const handleClickAtualizarEstado = (id, novoEstado) => {
        props.AtualizarEstadoTarefa(id, novoEstado);
    };

    return (
        <div className="myContainer">
            {props.tarefas.map(taref => (
                <div key={taref.id} className={`${getCardClass(taref)} square`}>
                    <div className="header">
                        {taref.estado !== 'CONCLUIDO' && (
                        <button className="btn-left" onClick={() => handleClickAtualizarEstado(taref.id,'CONCLUIDO')}><CheckCircleIcon size={16} /></button>
                        )}
                        <span className='titulo'> <strong>{taref.estado}</strong> </span>
                        <button className="btn-right" onClick={() => handleClickRemoverTarefa(taref.id)}><XIcon size={16} /></button>
                    </div>
                    <div className="body">
                        {taref.nome}
                       
                    </div>
                    <div className="footer">
                        <span>{formatDate(taref.dataCadastro)}</span>
                        <span>{formatTime(taref.dataCadastro)}</span>
                    </div>
                </div>
            ))}
        </div>
      );
}

export default ListagemTask;