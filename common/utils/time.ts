export function tempoParaSegundos(tempoEmString: string): number {
    const tempoSeparado = tempoEmString.split(':').map(str => Number(str));

    return tempoSeparado[0] * 60 + tempoSeparado[1];
}

export function segundosParaTempo(tempoEmSegundos: number): string {
    const minutos = String(Math.floor(tempoEmSegundos / 60)).padStart(2, '0');
    const segundos = String(tempoEmSegundos % 60).padStart(2, '0');
    return `${minutos}:${segundos}`
}