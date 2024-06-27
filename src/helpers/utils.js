/**
 * @function encontrarPor
 * @summary encontra objetos dentro de uma tabela
 *
 * @description Dado um valor, compara esse valor com o campo de cada objeto dentro
 * de uma tabela (array). Retorna uma tabela (array), de todos os objetos com o valor
 * correspondente
 *
 * @param {string} campo - O campo do objeto
 * @param {*} valor - O valor que deseja ser encontrado dentro da tabela
 * @param {object[]} tabela - A tabela onde fica os objetos
 *
 * @returns {object[]}
 */
export function encontrarPor(campo, valor, tabela) {
    const objetosComOValor = []

    tabela.forEach((objeto) => {
        if (objeto[campo] == valor) {
            objetosComOValor.push(objeto)
        }
    })

    return objetosComOValor
}

/** 
 * @function vazio
 * @summary Retorna verdeiro se uma array ou objeto estão vazios, falso se não
 *
 * @param {Array | Object} obj - O objeto ou array que será checado
 *
 * @returns {boolean}
 */
export const vazio = obj => 
    Array.isArray(obj) ? 
        obj.length === 0 : Object.keys(obj).length === 0

