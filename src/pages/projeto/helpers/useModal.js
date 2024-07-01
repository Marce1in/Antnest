import { useState } from "react"

/** @param {...string} args */
export function useModals(...args){
    const modals = {}
    args.forEach(prop => modals[prop] = useState(false))

    const filtro = {
        /**
         * @param {Object} obj
         * @param {string | symbol} prop
         * prop @param {*} valor
         */
        set(obj, prop, valor) {
            if (!(prop in obj)) {
                throw Error(`O estado do modal ${prop.toString()} que você está tentando atualizar não existe :(`)
            }
            else if (typeof valor != "boolean"){
                throw Error(`O valor passado ao estado ${valor} não é um boleano :(`)
            }

            obj[prop][1](valor);
            return true;
        },

        /**
         * @param {Object} obj
         * @param {string | symbol} prop
         */
        get(obj, prop) {
            if (prop in obj) {
                return obj[prop][0];
            }

            throw Error(`O estado do modal ${prop.toString()} que você está acessando não foi declarado :(`)
        }

    }
    const modalsProxy = new Proxy(modals, filtro);

    return modalsProxy
}
