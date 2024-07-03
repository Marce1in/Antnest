/**
 * @typedef {object} Usuario
 * 
 * @property {uuid} id - Id do usuário
 * @property {string} nome - Nome do usuário
 * @property {string} email - Email do usuário
 * @property {string} senha - Senha do usuário
 * @property {string} urlImagem - Linka da imagem de perfil do usuário
 * 
 */


/**
 * @typedef {object} Membro
 * 
 * @property {uuid} id - Id do membro
 * @property {uuid} idUsuario - Id do usuario
 * @property {uuid} idCargo - Id do cargo do usuário dentro do projeto
 * @property {uuid} idProjeto - Id do projeto que o membro pertence
 */


/**
 * @typedef {object} Tarefa
 * 
 * @property {uuid} id - Id da tarefa
 * @property {string} nome - Nome da tarefa
 * @property {string} descricao - Descrição da tarefa
 * @property {Date} dataExpiracao - Data que a tarefa irá expirar (ficando vermelha)
 * @property {uuid} idProjeto - Id do projeto que a tarefa pertence
 * @property {number} status - O status da tarefa, 0 = A fazer, 1 = Em andamento, 2 = Concluída, 3 = Atrasada 
 * 
 */


/**
 * @typedef {object} Cargo
 * 
 * @property {uuid} id - Id do cargo
 * @property {string} nome - Nome do cargo
 * @property {permissoes} permissoes - Objeto contendo as permissões, separados por "permissão": "bool"
 * @property {uuid} idProjeto - Id do projeto que o cargo pertence
 */


/**
 * @typedef {object} Projeto
 * 
 * @property {uuid} id - Id do projeto
 * @property {string} nome - Nome do projeto 
 * @property {string} descricao - Descrição do produto
 * @property {uuid} idDono - Id da pessoa que criou o projeto
 */


/**
 * @typedef {object} RelacionamentoTarefaMembro
 * 
 * @property {uuid} idTarefa - id da tarefa onde o membro está alocado
 * @property {uuid} idMembro - id do membro que está alocado na tarefa
 */
