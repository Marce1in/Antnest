import './App.css'

import  Home  from './pages/home/Home.jsx'
import  Login from './pages/login/Login.jsx'
import  Registro  from './pages/registro/Registro.jsx'
import  Projeto  from './pages/projeto/Projeto.jsx'

import {
    HashRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Tabela from '@tabela'
import { Toaster } from 'sonner'
import { popularTabelas, resetarLocalStorage } from './helpers/dadosFake'

// Iniciando todas as tabelas
Tabela.iniciar("usuario", ["id", "nome", "email", "senha", "urlImagem"])
Tabela.iniciar("projeto", ["id", "nome", "descricao", "idDono"])
Tabela.iniciar("membro", ["id", "idUsuario", "idCargo", "idProjeto"])
Tabela.iniciar("tarefa", ["id", "nome", "descricao", "dataExpiracao", "idProjeto", "status"])
Tabela.iniciar("relacionamentoTarefaMembro", ["idTarefa", "idMembro"])
Tabela.iniciar("cargo", ["id", "nome", "permissoes", "idProjeto"]) 

//Se for true os botões de limpar e popular localStorage aparecerão em todas páginas.
const debug = true

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />           
                    <Route path="/login" element={<Login />} />           
                    <Route path="/registro" element={<Registro />} />           
                    <Route path="/projeto" element={<Projeto />} />           
                </Routes>
            </Router>
            <Toaster richColors/>

            {debug &&
                <div className='fixed bottom-2 left-2 flex flex-col gap-2 bg-gray-400 p-2 rounded-xl'>
                    <button onClick={() => resetarLocalStorage()} 
                        className='border border-black p-2 rounded bg-red-300 hover:bg-red-400 transition-colors'>
                        Limpar LocalStorage
                    </button>
                    <button onClick={() => popularTabelas()} 
                        className='border border-black p-2 rounded bg-green-300 hover:bg-green-400 transition-colors'>
                        Popular Tabelas
                    </button>
                </div>
            }
        </>
    )
}

export default App
