import { FormEvent, useState } from 'react'
import ITarefa from '../../interfaces/ITarefa'
import Botao from '../Botao/Botao'
import style from './Formulario.module.scss'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
    const tarefaVazia = { texto: "", tempo: "" }
    const [novaTarefa, setNovaTarefa] = useState<ITarefa>(tarefaVazia);

    function addTarefa(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setTarefas(prev =>
            [
                ...prev,
                novaTarefa
            ]
        );
        setNovaTarefa(tarefaVazia);
    };

    return (<form className={style.formTarefa} onSubmit={addTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="nome-tarefa">Adicione um novo estudo</label>
            <input type="text" name="nome-tarefa" id="nome-tarefa" placeholder='O que você quer estudar' required
                value={novaTarefa?.texto} onChange={e => setNovaTarefa(
                    prev => (
                        {
                            ...prev,
                            texto: e.target.value
                        }
                    )
                )} />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input type="time" name="tempo" id="tempo" required
                value={novaTarefa?.tempo} onChange={e => {
                    setNovaTarefa(
                        prev => (
                            {
                                ...prev,
                                tempo: e.target.value
                            }
                        )
                    )
                }} />
        </div>
        <Botao type="submit">
            Adicionar
        </Botao>
    </form>)
}