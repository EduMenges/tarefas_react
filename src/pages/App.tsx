import { useState } from 'react'
import style from './App.module.scss'
import Formulario from '../components/Formulario/Formulario'
import Lista from '../components/Lista/Lista'
import Cronometro from '../components/Cronometro/Cronometro'
import ITarefa from '../interfaces/ITarefa'


function App() {
  const [listaDeTarefas, setTarefas] = useState<ITarefa[]>([]);
  const [tarefaSelecionada, setSelecionada] = useState<ITarefa>();

  function finalizarTarefa() {
    if (tarefaSelecionada) {
      tarefaSelecionada.completado = true;
    }
  }

  return (
    <main className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro selecionada={tarefaSelecionada} finalizarTarefa={finalizarTarefa} />
      <Lista listaDeTarefas={listaDeTarefas} selecionada={tarefaSelecionada} setSelecionada={setSelecionada} />
    </main>
  )
}

export default App
