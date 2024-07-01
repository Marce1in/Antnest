import { useState } from 'react'
import './Projeto.css'
import Gaveta from './components/Gaveta'
//@ts-ignore
import placeholder from './assets/placeholder.svg'
import Ferramentas from './components/Ferramentas'
import Tarefas from './components/Tarefas'
import useModals from './helpers/useModal'

export default function Projeto(){
    const modalsController = useModals()

    const Icon = () => <img src={placeholder} />

    return (
        <>
            <nav className="nav">
                <span className='nav__logo'>Ant<span>nest</span></span>

                <button
                    className='nav__hamburguer'
                    onClick={() => modalsController.gaveta = true}
                > <Icon /> </button>
            </nav>
            <div className="layout">
                <Tarefas />
                <Ferramentas />
                <Gaveta modalsController={modalsController} />
            </div>
        </>
    )
}
