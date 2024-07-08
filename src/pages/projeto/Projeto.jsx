import './Projeto.css'
import { HiBars3 } from "react-icons/hi2";
import Gaveta from './components/Gaveta'
import Ferramentas from './components/Ferramentas'
import ModalsTelas from './components/ModalsTelas'
import TarefasLista from './components/TarefasLista';
import Sessao from '@sessao';

import { useModals } from './helpers/useModal'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTabela } from '@useTabela';
import Tabela from '@tabela';
import { vazio } from '@utils';
import encontrarCargo from './helpers/handleCargo';
import encontrarMembro from './helpers/handleMembro';

export default function Projeto() {
    const navegar = useNavigate()

    useEffect(() => {
        //Verifica se o projeto que o usuário está tentando entrar existe
        const idProjeto = Sessao.obter("projetoSessao")
        if (!idProjeto){
            navegar("/")
        }
    }, [])



    const tarefas = useTabela("tarefa")

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
                <TarefasLista tarefas={tarefas} />

                <Ferramentas modals={modals}/>
                <Gaveta modals={modals} />
            </div>

            <ModalsTelas modals={modals} tarefas={tarefas}/>
        </>
    )
}
