import { useState } from 'react'
import './Projeto.css'
//@ts-ignore
import placeholder from './assets/placeholder.svg'
import { useTabela } from '@useTabela'
import Drawer from './components/Drawer'

export default function Projeto(){
    const tarefas = useTabela("tarefa")
    const [drawer, setDrawer] = useState(false)

    const Icon = () => <img src={placeholder} />

    return (
        <>
            <nav className="nav">
                <span className='nav__logo'>Ant<span>nest</span></span>

                <button
                    className='nav__hamburguer'
                    onClick={() => setDrawer(true)}
                > <Icon /> </button>
            </nav>
            <div className="layout">
                <main className="tarefas">
                    <ul className="tarefas__container">
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                        <li>Teste</li>
                    </ul>
                </main>
                <aside className="ferramentas">
                    <ul className="ferramentas__container">
                        <li role="button" tabIndex={0}>
                            <Icon />
                            <span>
                                Criar
                            </span>
                        </li>
                        <li role="button" tabIndex={0}>
                            <Icon />
                            <span>
                                Membros
                            </span>
                        </li>
                        <li role="button" tabIndex={0}>
                            <Icon />
                            <span>
                                Cargos
                            </span>
                        </li>
                        <li role="button" tabIndex={0}>
                            <Icon />
                            <span>
                                Configurações
                            </span>
                        </li>
                    </ul>
                </aside>
            </div>
            <Drawer setDrawer={setDrawer} drawerState={drawer} />
        </>
    )
}
