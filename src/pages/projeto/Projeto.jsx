import './Projeto.css'
import { HiBars3 } from "react-icons/hi2";
import Gaveta from './components/Gaveta'
import Ferramentas from './components/Ferramentas'

import { useModals } from './helpers/useModal'
import ModalsTelas from './components/ModalsTelas'
import TarefasLista from './components/TarefasLista';

export default function Projeto() {
    /**
     *  @type {{
     *  "gaveta": boolean,
     *  "criar": boolean,
     *  "membros": boolean,
     *  "cargos": boolean,
     *  "config": boolean
     *  }}
     */
    const modals = useModals("gaveta", "criar", "membros", "cargos", "config")

    return (
        <>
            <nav className="nav">
                <span className='nav__logo'>Ant<span>nest</span></span>
                <button
                    className='nav__hamburguer'
                    onClick={() => modals.gaveta = true}
                > <HiBars3 size="3.125rem"/> </button>
            </nav>

            <div className="layout">
                <TarefasLista />
                <Ferramentas modals={modals}/>
                <Gaveta modals={modals} />
            </div>

            <ModalsTelas modals={modals}/>
        </>
    )
}
