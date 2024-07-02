import './Projeto.css'
import Gaveta from './components/Gaveta'
//@ts-ignore
import placeholder from './assets/placeholder.svg'
import Ferramentas from './components/Ferramentas'
import Tarefas from './components/Tarefas'

import { useModals } from './helpers/useModal'
import ModalsTelas from './components/Modals'

export default function Projeto() {
    /** @type {Object}*/
    const modals = useModals("gaveta", "criar", "membros", "cargos", "config")

    const Icon = () => <img src={placeholder} />

    return (
        <>
            <nav className="nav">
                <span className='nav__logo'>Ant<span>nest</span></span>

                <button
                    className='nav__hamburguer'
                    onClick={() => modals.gaveta = true}
                > <Icon /> </button>
            </nav>
            <div className="layout">
                <Tarefas />
                <Ferramentas />
                <Gaveta modals={modals} />
            </div>
            <ModalsTelas modals={modals}/>
        </>
    )
}
