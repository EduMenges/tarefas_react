import { FormEvent, ReactNode } from 'react'
import style from './Botao.module.scss'

interface Props {
    onClick?: () => void,
    type?: "button" | "submit" | "reset",
    children: ReactNode
}

export default function Botao({ onClick, type, children }: Props) {
    return <button className={style.botao} type={type} onClick={onClick}>
        {children}
    </button>
}