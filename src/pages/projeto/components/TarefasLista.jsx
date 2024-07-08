import Modal from './Modal'
import Sessao from '@sessao'
import TarefaInstancia from './TarefaInstancia'
import TarefaModal from './TarefaModal'
import { useModals } from '../helpers/useModal'
import { useState } from 'react'
import './TarefasLista.css'

export default function TarefasLista({tarefas}){
    /** @type {{tarefa: boolean, membrosAlocados: boolean}}*/
    const modal = useModals("tarefa", "membrosAlocados")
    const [tarefa, setTarefa] = useState({})

    /** @type {Tarefa[]}*/
    const tarefasProjeto = tarefas.encontrarPor("idProjeto", Sessao.obter("projetoSessao"))

    const tarefasLista = tarefasProjeto.map(tarefa =>
        <TarefaInstancia
            key={tarefa.id}
            nome={tarefa.nome}
            data={tarefa.dataExpiracao}
            onClick={() => {modal.tarefa = true; setTarefa(tarefa)}}
            status={tarefa.status}
        />
    )

    return(
        <>
            <main className="tarefas">
                <ul className="tarefas__container">
                    {tarefasLista}
                </ul>

                { modal.tarefa &&
                    <Modal nome="tarefa" modals={modal}>
                        <TarefaModal
                            modalControle={modal}
                            tarefas={tarefas}
                            //@ts-ignore << si fude, nem to te usando typescript
                            tarefa={tarefa}
                        />
                    </Modal>
                }
            </main>
        </>
    )
}
