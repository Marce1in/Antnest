import { LuUserCog2 } from "react-icons/lu";
import "./MembroAdministrar.css"
import Tabela from "@tabela";
import { useModals } from "../helpers/useModal";

/** 
 * @param {Object} props
 * @param {string} [props.idMembro]
 * @param {Tabela} [props.membros]
 */
export default function MembroAdministrar({idMembro, membros}){

    function banir(){
        membros.deletarPor("id", idMembro)
        membros.enviarParaLocalStorage()

        const relacionamento = new Tabela("relacionamentoTarefaMembro")
        relacionamento.deletarPor("idMembro", idMembro)
        relacionamento.enviarParaLocalStorage()
    }

    return(
        <>
            <button
                onClick={() => modalControle.mudarCargo = true}
            >
                <LuUserCog2 color="green" size="1.5rem"/>
            </button>
            <button
                className="membroAdministrar__remover"
                onClick={() => banir()}
            > ✕ </button>
        </>
    )
}
