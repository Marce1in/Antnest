import CargosInstancia from "./CargosInstancia";
import "./CargosLista.css"
import { useTabela } from "@useTabela";
import Sessao from "@sessao";
import React from "react";
import { useModals } from "../helpers/useModal";
import Modal from "./Modal";
import CargosCriar from "./CargosCriar";

/** 
 * @param {Object} props
 * @param {boolean} [props.criar=false]
 * @param {import('react').ReactNode} [props.children] | [boolean]
 */
export default function CargosLista({children=false, criar=false}){
    const cargos = useTabela("cargo")
    const modals = useModals("criarCargo")

    /** @type {Cargo[]} */
    const cargosProjeto = cargos.encontrarPor("idProjeto", Sessao.obter("projetoSessao"))

    const cargosLista = cargosProjeto.map(cargo => {
        let propriedadeExtra = children

        if(children){
            //@ts-ignore << Confia em mim, tá funcionando :)
            propriedadeExtra = React.cloneElement(children, { idCargo: cargo.id, cargos: cargos })
        }

        return (
            //@ts-ignore insuportável
            <CargosInstancia key={cargo.id} nome={cargo.nome} permissoes={cargo.permissoes}>
                {propriedadeExtra}
            </CargosInstancia>
        )
    })

    return (
        <>
            <div className="cargos">
                <ul className="cargos__lista">
                    {cargosLista}
                </ul>
            </div>
            {criar &&
                <button
                    onClick={() => modals.criarCargo = true}
                    className='cargos__criar'
                > Criar </button>
            }

            {modals.criarCargo && 

                <Modal modals={modals} nome={"criarCargo"}>
                    <CargosCriar cargos={cargos}/>
                </Modal>
            }
        </>
    )
}
