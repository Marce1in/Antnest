import { LuUserCog2 } from "react-icons/lu";
import "./MembroAdministrar.css"
import Tabela from "@tabela";

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

    console.log(idMembro)
    console.log(membros)
    return(
        <>
            <button>
                <LuUserCog2 color="green" size="1.5rem"/>
            </button>
            <button
                className="membroAdministrar__remover"
                onClick={() => banir()}
            > ✕ </button>
        </>
    )
}
