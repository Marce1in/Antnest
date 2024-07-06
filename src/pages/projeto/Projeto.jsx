import './Projeto.css'
import Gaveta from './components/Gaveta'
import { HiBars3 } from "react-icons/hi2";
//@ts-ignore
import Ferramentas from './components/Ferramentas'
import Tarefas from './components/Tarefas'

import { useModals } from './helpers/useModal'
import ModalsTelas from './components/ModalsTelas'

export default function Projeto() {
    /** 
     *  @type {{
     *  "gaveta": boolean,
     *  "criar": boolean,
     *  "membros": boolean,
     *  "cargos": boolean,
     *  "config": boolean
     *  }}
     * */
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
                <Tarefas />
                <Ferramentas modals={modals}/>
                <Gaveta modals={modals} />
            </div>

            <ModalsTelas modals={modals}/>
        </>
    )
}
