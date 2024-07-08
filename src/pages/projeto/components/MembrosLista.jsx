import './MembrosLista.css'
import MembroInstancia from './MembroInstancia'
import Tabela from '@tabela'
import React from 'react'
import { vazio } from '@utils'
import { useTabela } from '@useTabela'

/** 
 * @param {Object} props
 * @param {Membro[]} props.membros
 * @param {Tabela} props.membrosTabela
 * @param {boolean} [props.criar=false]
 * @param {import('react').ReactNode} [props.children] | [boolean]
 */
export default function MembrosLista({membros, membrosTabela, criar=false, children = false}){

    /** @type {Usuario[]}*/
    const usuarios = membros.map(membro =>
        Tabela.encontrarEmLocalStoragePor("id", membro.idUsuario, "usuario", true)
    )
    /** @type {Cargo[]}*/
    const cargos = membros.map(membro =>
        Tabela.encontrarEmLocalStoragePor("id", membro.idCargo, "cargo", true)
    )

    const membrosLista = usuarios.map((usuario, i) => {
        let propriedadeExtra = children

        if(children){
            //@ts-ignore << Confia em mim, tá funcionando :)
            propriedadeExtra = React.cloneElement(children, { idMembro: membros[i].id, membros: membrosTabela})
        }

        if (vazio(usuario)){
            return
        }

        return (
            <MembroInstancia
                key={membros[i].id}
                nome={usuario.nome}
                foto={usuario.urlImagem}
                cargo={cargos[i].nome}
            >
                {propriedadeExtra}
            </MembroInstancia>
        )
    }
    )

    return (
        <>
            <div className="membros">
                <ul className="membros__lista">
                    {membrosLista.length <= 0 ? 
                        //Sim. Eu usei tailwind aqui, tô sem paciência
                        <span className='text-sm px-10'>Ops!, nenhum Membro aqui!</span>
                        :
                        membrosLista
                    }
                </ul>
            </div>
            {criar &&
                <button
                    className='membros__convidar'
                > Convidar </button>
            }
        </>
    )
}
