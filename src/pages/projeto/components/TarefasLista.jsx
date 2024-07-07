import { useModals } from '../helpers/useModal'
import Modal from './Modal'
import TarefaInstancia from './TarefaInstancia'
import TarefaModal from './TarefaModal'
import './TarefasLista.css'

export default function TarefasLista(){
    const modal = useModals("tarefa")

    return(
        <>
            <main className="tarefas">
                <ul className="tarefas__container">
                    <TarefaInstancia
                        nome="Tarefa Muito maneira"
                        data="14/10/2004"
                        onClick={() => modal.tarefa = true}
                    />
                    <TarefaInstancia
                        nome="Tarefa Bacanuda"
                        data="14/10/2004" 
                        onClick={() => modal.tarefa = true}
                    />
                    <TarefaInstancia
                        nome="Tarefa Que legal eim, bem legal"
                        data="14/10/2004"
                        onClick={() => modal.tarefa = true}
                    />
                    <TarefaInstancia
                        nome="Tarefa vou gritar aaaaaaaaaaaaaaaaaaa"
                        data="14/10/2004"
                        onClick={() => modal.tarefa = true}
                    />
                </ul>

                { modal.tarefa &&
                    <Modal nome="tarefa" modals={modal}>
                        <TarefaModal />
                    </Modal>
                }
            </main>
        </>
    )
}
