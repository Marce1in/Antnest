// @ts-nocheck

/*
    Sim, eu transformei o Json em um javascript, motivo?
    O Json não indica bem que cada Tabela (array de objetos)
    precisa ter sua prória chave no localStorage.

    Cada tabela (array de objetos) precisa ter sua prória instancia 
    no localStorage, se não iria ficar muito confuso e difícil de
    mudar apenas uma tabela específica.
*/

//Key do localStorage: tarefas
[
    {
        "id" : "851c73c2-8046-4d43-8224-f034ee31ee76",
        "nome": "Tomar banho",
        "dataExpiracao": "2025/06/19",
        "idProjeto": "86f79542-fa7a-437d-942c-cd695b4ef82e"
    }
]

//Key do localStorage: projetos
[
    {
        "id": "86f79542-fa7a-437di-942c-cd695b4ef82e",
        "nome": "Criar Antnest",
        "descricao": "Projeto com a intenção de desenvolver o Antnest",
        "idDono": "9bc4307a-adaa-4ba3-978f-33720c9f9076"
    }
]

//Key do localStorage: cargos
[
    {
        "id": "6c9f3ac6-2775-41f3-a38a-f33797d75a04",
        "nome": "admin",
        "permissões": {
            "tarefa": true,
            "membro": true,
            "cargo": true,
            "projeto": true
        },
        "idProjeto": "86f79542-fa7a-437di-942c-cd695b4ef82e"
    }
]

//Key do localStorage: membros
[
    {
        "id": "d8592e21-56a3-4024-9a9d-d2a68867954f",
        "idDono": "9bc4307a-adaa-4ba3-978f-33720c9f9076",
        "idCargo": "6c9f3ac6-2775-41f3-a38a-f33797d75a04",
        "idProjeto": "86f79542-fa7a-437di-942c-cd695b4ef82e"
    }
]

//Key do localStorage: usuarios
[
    {
        "id": "9bc4307a-adaa-4ba3-978f-33720c9f9076",
        "nome": "admin",
        "senha": "admin",
        "email": "admin@gmail.com",
        "urlImagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgW-9Jx6-Crl3276BP1k_XU2smWpgrwpdnfOPG1yqXYXmDSFV-OGD13-5&s=10"
    }
]

//Key do localStorage: relacionamento_Tarefa_Membros
[
    {
        "idMembro": "d8592e21-56a3-4024-9a9d-d2a68867954f",
        "idTarefa": "851c73c2-8046-4d43-8224-f034ee31ee76"
    }
]

