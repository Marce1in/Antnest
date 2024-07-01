import { useState } from "react"

export class controlarModals{
    /** @type {Function}*/
    #_setGaveta
    /** @type {Function}*/
    #_setCriar
    /** @type {Function}*/
    #_setMembros
    /** @type {Function}*/
    #_setCargos
    /** @type {Function}*/
    #_setConfig

    /** @type {boolean}*/
    #_gaveta
    /** @type {boolean}*/
    #_criar
    /** @type {boolean}*/
    #_membros
    /** @type {boolean}*/
    #_cargos
    /** @type {boolean}*/
    #_config

    /**
     * @param {boolean} gaveta
     * @param {Function} setGaveta
     * @param {boolean} criar
     * @param {Function} setCriar
     * @param {boolean} membro
     * @param {Function} setMembro
     * @param {boolean} cargos
     * @param {Function} setCargos
     * @param {boolean} config
     * @param {Function} setConfig
     */
    constructor(
        gaveta, setGaveta,
        criar, setCriar,
        membro, setMembro,
        cargos, setCargos,
        config, setConfig) {

        this.#_gaveta = gaveta
        this.#_setGaveta = setGaveta

        this.#_criar = criar
        this.#_setCriar = setCriar

        this.#_membros = membro
        this.#_setMembros = setMembro

        this.#_cargos = cargos
        this.#_setCargos = setCargos

        this.#_config = config
        this.#_setConfig = setConfig
    }

    /** @returns {boolean} */
    get gaveta(){
        return this.#_gaveta
    }
    /** @param {boolean} estado */
    set gaveta(estado){
        this.#_setGaveta(estado)
    }

    /** @returns {boolean} */
    get criar(){
        return this.#_criar
    }
    /** @param {boolean} estado */
    set criar(estado){
        this.#_setCriar(estado)
    }

    /** @returns {boolean} */
    get membros(){
        return this.#_membros
    }
    /** @param {boolean} estado */
    set membros(estado){
        this.#_setMembros(estado)
    }

    /** @returns {boolean} */
    get cargos(){
        return this.#_cargos
    }
    /** @param {boolean} estado */
    set cargos(estado){
        this.#_setCargos(estado)
    }

    /** @returns {boolean} */
    get config(){
        return this.#_config
    }
    /** @param {boolean} estado */
    set config(estado){
        this.#_setConfig(estado)
    }
}

export function useModals(){
    const [gaveta, setGaveta] = useState(false)
    const [criar, setCriar] = useState(false)
    const [membros, setMembros] = useState(false)
    const [cargos, setCargos] = useState(false)
    const [config, setConfig] = useState(false)

    return new controlarModals(
        gaveta, setGaveta,
        criar, setCriar,
        membros, setMembros,
        cargos, setCargos,
        config, setConfig
    )
}
