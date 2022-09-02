import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../../common/utils/time'
import ITarefa from '../../interfaces/ITarefa'
import Botao from '../Botao/Botao'
import style from './Cronometro.module.scss'
import Relogio from './Relogio/Relogio'

interface Props {
    selecionada: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionada, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>(0);

    useEffect(() => {
        if (selecionada?.tempo) setTempo(tempoParaSegundos(selecionada.tempo));
    }, [selecionada])

    function regressiva(contador: number) {
        setTimeout(() => {
            if (contador <= 0) {
                finalizarTarefa();
            } else {
                setTempo(tempo - 1);
                return regressiva(contador - 1)
            };
        }, 1000)
    }

    return <div className={style.cronometro}>
        <p>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo} />
        </div>
        <Botao onClick={() => regressiva(tempo)}>
            Começar
        </Botao>
    </div>
}
