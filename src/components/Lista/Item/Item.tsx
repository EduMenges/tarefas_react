import ITarefa from '../../../interfaces/ITarefa'
import style from './Item.module.scss'

interface Props {
    key: number,
    tarefa: ITarefa,
    selecionada?: ITarefa,
    setSelecionada: React.Dispatch<React.SetStateAction<ITarefa | undefined>>
}

export default function Item({ key, tarefa, selecionada, setSelecionada }: Props) {
    return (<li className={`${style.item}
    ${selecionada == tarefa ? style.itemSelecionado : ""}
    ${tarefa.completado ? style.itemCompletado : ""}`}
        key={key}
        onClick={() => !tarefa.completado && setSelecionada(tarefa)}>
        <h3>{tarefa.texto}</h3>
        <span>{tarefa.tempo}</span>
    </li>)
}