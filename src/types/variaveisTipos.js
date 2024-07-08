/**
 * @typedef {string} uuid - Criado por crypto.randomUUID()
 */


/** 
 * @typedef {Object<string, boolean>} permissoes 
 * 
 * @property {boolean} bool - Indica se o usuário tem permissão ou não
*/

/**
 * @typedef {{
 * id: string,
 * idProjeto: string,
 * nome: string,
 * permissoes: {
 *  tarefas: boolean,
 *  membros: boolean,
 *  cargos: boolean,
 *  projeto: boolean
 * }
 * }} cargo
 */
