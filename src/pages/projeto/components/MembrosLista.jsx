import './MembrosLista.css'
import MembroInstancia from './MembroInstancia'
import Tabela from '@tabela'
import React, { useState } from 'react'
import { vazio } from '@utils'
import Modal from './Modal'
import { useModals } from '../helpers/useModal'
import CargosLista from './CargosLista'
import MembroConvidar from './MembroConvidar'
import MembroMudarCargo from './MembroMudarCargo'

/** 
 * @param {Object} props
 * @param {Membro[]} props.membros
 * @param {Tabela} props.membrosTabela
 * @param {boolean} [props.criar=false]
 * @param {import('react').ReactNode} [props.children] | [boolean]
 */
export default function MembrosLista({membros, membrosTabela, criar=false, children = false}){
    const modalsCont = useModals("membroCargo", "membroConvidar")
    const [membroId, setMembroId] = useState("")

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
            propriedadeExtra = React.cloneElement(children, {
                idMembro: membros[i].id,
                membros: membrosTabela,
                setMembroId: setMembroId,
                modalsCont: modalsCont
            })
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
                <>
                    <button
                        className='membros__convidar'
                        onClick={() => modalsCont.membroConvidar = true}
                    > Convidar </button>

                    <Modal nome="membroCargo" modals={modalsCont}>
                        <CargosLista>
                            <MembroMudarCargo membroId={membroId} membrosTabela={membrosTabela}/>
                        </CargosLista>
                    </Modal>
                    <Modal nome="membroConvidar" modals={modalsCont}>
                        <MembroConvidar modalControle={modalsCont} membros={membrosTabela}/>
                    </Modal>
                </>

            }
        </>
    )
}
