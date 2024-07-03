import Tabela from "@tabela"

export function resetarLocalStorage(){
    localStorage.clear()
}

export function popularTabelas(){
    Tabela.iniciar("usuario", ["id", "nome", "email", "senha", "urlImagem"])
    Tabela.iniciar("projeto", ["id", "nome", "descricao", "idDono"])
    Tabela.iniciar("membro", ["id", "idUsuario", "idCargo", "idProjeto"])
    Tabela.iniciar("tarefa", ["id", "nome", "descricao", "dataExpiracao", "idProjeto", "status"])
    Tabela.iniciar("relacionamentoTarefaMembro", ["idTarefa", "idMembro"])
    Tabela.iniciar("cargo", ["id", "nome", "permissoes", "idProjeto"]) 

    popularUsuario()
    popularProjeto()
    popularCargos()
    popularMembros()
    popularTarefas()
    populacaRelacionamentosTarefaMembro()
}

function popularUsuario(){
    const usuarios = new Tabela("usuario")

    usuarios.adicionar({
        id: "afd0b036-625a-3aa8-b639-9dc8c8fff0ff",
        nome: "marcelo",
        email: "marcelo@gmail.com",
        senha: "1",
        urlImagem: "/public/fotoUsuarioPlaceholder.jpg"
    })
    usuarios.adicionar({
        id: "9c45c2f1-1761-3daa-ad31-1ff8703ae846",
        nome: "lorenzo",
        email: "lorenzo@gmail.com",
        senha: "1",
        urlImagem: "/public/fotoUsuarioPlaceholder.jpg"
    })
    usuarios.adicionar({
        id: "bc27b4db-bc0f-34f9-ae8e-4b72f2d51b60",
        nome: "joao",
        email: "joao@gmail.com",
        senha: "1",
        urlImagem: "/public/fotoUsuarioPlaceholder.jpg"
    })
    usuarios.adicionar({
        id: "bc15e987-c240-398e-a7b3-80ad343aecc2",
        nome: "fernando",
        email: "fernando@gmail.com",
        senha: "1",
        urlImagem: "/public/fotoUsuarioPlaceholder.jpg"
    })
    usuarios.adicionar({
        id: "33c5b33c-0b68-33d0-b637-b2c256417bf3",
        nome: "guilherme",
        email: "guilherme",
        senha: "1",
        urlImagem: "/public/fotoUsuarioPlaceholder.jpg"
    })

    usuarios.enviarParaLocalStorage()
}

function popularProjeto(){
    const projetos = new Tabela("projeto")

    projetos.adicionar({
        id: "d2fa764c-dcb6-320a-86e1-62e6dc209811",
        nome: "AntNest",
        descricao: "AntNest é um site usado para gerenciar seus projetos",
        idDono: "9c45c2f1-1761-3daa-ad31-1ff8703ae846" //lorenzo
    })
    projetos.adicionar({
        id: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54",
        nome: "Gerenciador de bibliotecas",
        descricao: "Gerenciador de bibliotecas é um sistema CLI que é usado para gerenciar um biblioteca",
        idDono: "9c45c2f1-1761-3daa-ad31-1ff8703ae846" //lorenzo
    })
    projetos.adicionar({
        id: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5",
        nome: "Quadras Esportivas",
        descricao: "Quadras esportivas é uma coleção de gambiarras que permitem os usuários alugarem quadras",
        idDono: "afd0b036-625a-3aa8-b639-9dc8c8fff0ff" //marcelo
    })

    projetos.enviarParaLocalStorage()
}

function popularCargos(){
    const cargos = new Tabela("cargo")

    cargos.adicionar({
        id: "6cdd0937-7cef-392c-b72b-2f21100593ec",
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        nome: "admin",
        permissoes: {"tarefas": true, "membros": true, "cargos": true, "projeto": true}
    })
    cargos.adicionar({
        id: "c0a33b56-5733-3cc9-aa67-b6792a187427",
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
        nome: "admin",
        permissoes: {"tarefas": true, "membros": true, "cargos": true, "projeto": true}
    })
    cargos.adicionar({
        id: "da7127ad-aa4c-344a-9575-61f4e15b67df",
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", //Quadras Esportivas
        nome: "admin",
        permissoes: {"tarefas": true, "membros": true, "cargos": true, "projeto": true}
    })

    cargos.adicionar({
        id: "16adf24a-516b-3184-801d-9a088a92c2ca",
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        nome: "mod",
        permissoes: {"tarefas": true, "membros": true, "cargos": true, "projeto": false}
    })
    cargos.adicionar({
        id: "f75472ac-829a-380f-8076-cdaee8de5a47",
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
        nome: "mod",
        permissoes: {"tarefas": true, "membros": true, "cargos": true, "projeto": false}
    })

    cargos.adicionar({
        id: "1d7f2e95-b12a-3430-8d15-ae8c31d11777",
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        nome: "gerente",
        permissoes: {"tarefas": true, "membros": true, "cargos": false, "projeto": false}
    })
    cargos.adicionar({
        id: "93555fe2-d6dd-38c8-98b8-566fd54446dc",
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
        nome: "gerente",
        permissoes: {"tarefas": true, "membros": true, "cargos": false, "projeto": false}
    })

    cargos.adicionar({
        id: "2e964c0a-8268-32a5-8d51-bec10c2b8d6c",
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", //Quadras Esportivas
        nome: "participante",
        permissoes: {"tarefas": false, "membros": false, "cargos": false, "projeto": false}
    })
    cargos.adicionar({
        id: "eeee5901-4d11-3536-afd1-79c113d37901",
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        nome: "participante",
        permissoes: {"tarefas": false, "membros": false, "cargos": false, "projeto": false}
    })

    cargos.enviarParaLocalStorage()
}

function popularMembros(){
    const membros = new Tabela("membro")

    membros.adicionar({
        id: "b4e2fe3a-1ee4-30eb-8066-621798592755",
        idUsuario: "afd0b036-625a-3aa8-b639-9dc8c8fff0ff", //marcelo
        idCargo: "6cdd0937-7cef-392c-b72b-2f21100593ec", //admin
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
    })
    membros.adicionar({
        id: "abe041fd-e94c-3153-acf9-c0bf589ca8f5",
        idUsuario: "9c45c2f1-1761-3daa-ad31-1ff8703ae846", //lorenzo
        idCargo: "6cdd0937-7cef-392c-b72b-2f21100593ec", //admin
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
    })
    membros.adicionar({
        id: "abe041fd-e94c-3153-acf9-c0bf589ca8f5",
        idUsuario: "bc27b4db-bc0f-34f9-ae8e-4b72f2d51b60", //joão
        idCargo: "16adf24a-516b-3184-801d-9a088a92c2ca", //mod
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
    })
    membros.adicionar({
        id: "7646c7ce-ef3a-3277-91d5-aacf5b052171",
        idUsuario: "33c5b33c-0b68-33d0-b637-b2c256417bf3", //guilherme
        idCargo: "93555fe2-d6dd-38c8-98b8-566fd54446dc", //gerente
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
    })
    membros.adicionar({
        id: "4a675dc7-6358-344c-b7ec-9a7bb8d820ec",
        idUsuario: "bc15e987-c240-398e-a7b3-80ad343aecc2", //fernando
        idCargo: "eeee5901-4d11-3536-afd1-79c113d37901", //participante
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
    })


    membros.adicionar({
        id: "de5498a8-0e52-3037-b4fa-a24be4bfc154",
        idUsuario: "9c45c2f1-1761-3daa-ad31-1ff8703ae846", //lorenzo
        idCargo: "c0a33b56-5733-3cc9-aa67-b6792a187427", //admin
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
    })
    membros.adicionar({
        id: "18d70dd2-0777-3755-853f-fcbe9f809c71",
        idUsuario: "bc27b4db-bc0f-34f9-ae8e-4b72f2d51b60", //joao
        idCargo: "f75472ac-829a-380f-8076-cdaee8de5a47", //mod
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
    })

    membros.adicionar({
        id: "2582f875-5b55-3e91-8617-56d1054090b9",
        idUsuario: "bc27b4db-bc0f-34f9-ae8e-4b72f2d51b60", //Joao
        idCargo: "da7127ad-aa4c-344a-9575-61f4e15b67df", //admin
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", //Quadras Esportivas
    })
    membros.adicionar({
        id: "e9768d04-4733-3b12-b211-4b14aa1595c4",
        idUsuario: "afd0b036-625a-3aa8-b639-9dc8c8fff0ff", //Marcelo
        idCargo: "da7127ad-aa4c-344a-9575-61f4e15b67df", //admin
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", //Quadras Esportivas
    })
    membros.adicionar({
        id: "eb04af6f-74d1-37df-ac69-893638e64ddc",
        idUsuario: "33c5b33c-0b68-33d0-b637-b2c256417bf3", //Guilherme
        idCargo: "2e964c0a-8268-32a5-8d51-bec10c2b8d6c", //participante
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", //Quadras Esportivas
    })

    membros.enviarParaLocalStorage()
}

function popularTarefas(){
    const tarefas = new Tabela("tarefa")

    tarefas.adicionar({
        id: "eb043f54-8731-3652-91bd-b4d8d9a7da5c",
        nome: "Fazer Tela",
        descricao: "Fazer uma tela muito bonita e legal",
        dataExpiracao: new Date(2024, 10, 14),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 1
    })
    tarefas.adicionar({
        id: "2c2fd4e8-65be-3583-ad3a-61fc5ac528c2",
        nome: "Implementar lógica",
        descricao: "Fazer a lógica do arquivo lógica.jsx",
        dataExpiracao: new Date(2024, 2, 12),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 1
    })
    tarefas.adicionar({
        id: "0d76d45f-3f2d-358b-9b53-590fe667c835",
        nome: "Fazer Documentação",
        descricao: "Escrever a documentação do arquivo lógica.jsx",
        dataExpiracao: new Date(2024, 11, 15),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 0
    })
    tarefas.adicionar({
        id: "a868f263-0284-34fa-811e-91b191214fea",
        nome: "Escrever testes",
        descricao: "Escrever os testes para o arquivo testes.jsx",
        dataExpiracao: new Date(2024, 4, 11),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 2
    })
    tarefas.adicionar({
        id: "dc2fe11e-f3f0-32ff-bbfe-7b51f8bb9755",
        nome: "Apagar data",
        descricao: "Deletar data duplicada dentro da database",
        dataExpiracao: new Date(2024, 1, 2),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 3
    })
    tarefas.adicionar({
        id: "d057520e-a565-3a3e-beef-abca411bde27",
        nome: "Organizar reunião",
        descricao: "Organizar reunião com o CEO do projeto, Yago Farinhas",
        dataExpiracao: new Date(2024, 10, 10),
        idProjeto: "7f1f7bb1-bd4e-361f-a3f0-1a98bb4a9f54", //Gerenciador de bibliotecas
        status: 0
    })
    tarefas.adicionar({
        id: "bda0c062-52c2-3397-8a2c-b4addd783cfa",
        nome: "Documentar o Quadras esportivas",
        descricao: "Documentar as Quadras esportivas",
        dataExpiracao: new Date(2024, 4, 10),
        idProjeto: "1ae8ec9c-e36c-3f07-921c-c9621d1529c5", // Quadras Esportivas
        status: 3
    })
    tarefas.adicionar({
        id: "83c1bfe6-e5d9-3d70-924a-3c9974d62826",
        nome: "Preparar pitch para o sharkTank",
        descricao: "OBS: feliz aniversário",
        dataExpiracao: new Date(2024, 12, 30),
        idProjeto: "d2fa764c-dcb6-320a-86e1-62e6dc209811", //AntNest
        status: 1 
    })

    tarefas.enviarParaLocalStorage()
}

function populacaRelacionamentosTarefaMembro(){
    const relacionamento = new Tabela("relacionamentoTarefaMembro")

    relacionamento.adicionar({
        idTarefa: "eb043f54-8731-3652-91bd-b4d8d9a7da5c",
        idMembro: "7646c7ce-ef3a-3277-91d5-aacf5b052171"
    })
    relacionamento.adicionar({
        idTarefa: "eb043f54-8731-3652-91bd-b4d8d9a7da5c",
        idMembro: "4a675dc7-6358-344c-b7ec-9a7bb8d820ec"
    })
    relacionamento.adicionar({
        idTarefa: "83c1bfe6-e5d9-3d70-924a-3c9974d62826",
        idMembro: ""
    })
    relacionamento.adicionar({
        idTarefa: "a868f263-0284-34fa-811e-91b191214fea",
        idMembro: ""
    })
    relacionamento.adicionar({
        idTarefa: "2c2fd4e8-65be-3583-ad3a-61fc5ac528c2",
        idMembro: "abe041fd-e94c-3153-acf9-c0bf589ca8f5"
    })
    relacionamento.adicionar({
        idTarefa: "2c2fd4e8-65be-3583-ad3a-61fc5ac528c2",
        idMembro: "b4e2fe3a-1ee4-30eb-8066-621798592755"
    })

    relacionamento.enviarParaLocalStorage()
}

