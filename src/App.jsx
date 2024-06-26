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

// Iniciando todas as tabelas
Tabela.iniciar("usuario", ["id", "nome", "email", "senha", "urlImagem"])
Tabela.iniciar("projeto", ["id", "nome", "descricao", "idDono"])
Tabela.iniciar("membro", ["id", "idUsuario", "idCargo", "idProjeto"])
Tabela.iniciar("tarefa", ["id", "nome", "descricao", "dataExpiracao", "idProjeto"])
Tabela.iniciar("relacionamentoTarefaMembro", ["idTarefa", "idMembro"])
Tabela.iniciar("cargo", ["id", "nome", "permissoes"]) 

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
        </>
    )
}

export default App
