import ITarefa from "../../interfaces/ITarefa"
import Item from "./Item/Item"
import style from "./Lista.module.scss"

interface Props {
    listaDeTarefas: ITarefa[],
    selecionada?: ITarefa,
    setSelecionada: React.Dispatch<React.SetStateAction<ITarefa | undefined>>
}

export default function Lista({ listaDeTarefas, selecionada, setSelecionada }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {listaDeTarefas.map(
                    (tarefa, i) => (
                        <Item
                            key={i}
                            selecionada={selecionada}
                            setSelecionada={setSelecionada}
                            tarefa={tarefa}
                        />
                    )
                )
                }
            </ul>
        </aside>
    )
}
