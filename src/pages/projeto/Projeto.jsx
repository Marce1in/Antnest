import './Projeto.css'
import { HiBars3 } from "react-icons/hi2";
import Gaveta from './components/Gaveta'
import Ferramentas from './components/Ferramentas'
import ModalsTelas from './components/ModalsTelas'
import TarefasLista from './components/TarefasLista';
import Sessao from '@sessao';

import { useModals } from './helpers/useModal'
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTabela } from '@useTabela';
import Tabela from '@tabela';
import { vazio } from '@utils';

export default function Projeto() {
    const navegar = useNavigate()

    useEffect(() => {
        //Verifica se o projeto que o usuário está tentando entrar existe
        const idProjeto = Sessao.obter("projetoSessao")
        if (!idProjeto){
            navegar("/")
        }
        Sessao.criar(encontrarMembro(), "membroSessao")
    }, [])

    //Descobre qual membro entrou no projeto e registra ele criando uma sessão
    function encontrarMembro(){
        const membrosProjeto = Tabela.encontrarEmLocalStoragePor(
            "idProjeto", 
            Sessao.obter("projetoSessao"), 
            "membro"
        )

        if (vazio(membrosProjeto)){
            const membros = new Tabela("membro")

            /** @type {Membro}*/
            const membro = {
                id: crypto.randomUUID(),
                idCargo: "",
                idUsuario: Sessao.obter(),
                idProjeto: Sessao.obter("projetoSessao")
            }

            membros.adicionar(membro)
            membros.enviarParaLocalStorage()

            return membro.id
        }
        else {
            const membroLogado = Tabela.encontrarEmTabelaPor("idUsuario", Sessao.obter(), membrosProjeto, true)

            return membroLogado.id
        }

    }

    //Verifica se o usuário é o dono do projeto
    const dono = () =>
        Tabela.encontrarEmLocalStoragePor(
            "id",
            Sessao.obter("projetoSessao"),
            "projeto",
            true
        ).idDono
            ===
        Tabela.encontrarEmLocalStoragePor(
            "id",
            Sessao.obter(),
            "usuario",
            true
        ).id

    const Cargo = createContext(encontrarCargo())

    //Descobre qual cargo o membro pertence, se não tiver cargo é criado um cargo
    //falso com nenhuma permissão, mas se for o dono é criado um cargo falso com
    //todas permissões
    function encontrarCargo(){
        /** @type {Membro}*/
        const membro = Tabela.encontrarEmLocalStoragePor(
            "id",
            Sessao.obter("membroSessao"),
            "membro",
            true
        )

        if(!membro.idCargo){
            if(dono()){
                /** @type {Cargo} */
                const cargoDono = {
                    id: "0",
                    idProjeto: "0",
                    nome: "",
                    permissoes: {
                        "tarefas": true,
                        "membros": true,
                        "cargos": true,
                        "projeto": true
                    }
                }

                return cargoDono
            }

            else {
                const cargoVisitante = {
                    id: "0",
                    idProjeto: "0",
                    nome: "",
                    permissoes: {
                        "tarefas": false,
                        "membros": false,
                        "cargos": false,
                        "projeto": false
                    }
                }

                return cargoVisitante
            }

        }
        else {
            return Tabela.encontrarEmLocalStoragePor(
                "id",
                membro.idCargo,
                "cargo",
                true
            )
        }
    }

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
                <Cargo.Provider value={Cargo}>
                    <TarefasLista tarefas={tarefas} />
                </Cargo.Provider>

                <Ferramentas modals={modals}/>
                <Gaveta modals={modals} />
            </div>

            <Cargo.Provider value={Cargo}>
                <ModalsTelas modals={modals} tarefas={tarefas}/>
            </Cargo.Provider>
        </>
    )
}
