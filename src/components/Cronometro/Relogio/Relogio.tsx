import style from './Relogio.module.scss'
import { segundosParaTempo } from '../../../../common/utils/time'

interface Props {
    tempo: number
}

export default function Relogio({ tempo = 0 }: Props) {
    const tempoFormatado = segundosParaTempo(tempo).split('');

    return <>
        {tempoFormatado.map(char => <span className={char == ':' ? "" : style.relogioNumero}>{char}</span>)}
    </>
}