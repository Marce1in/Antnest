import Tabela from "@tabela"
import "./CargosRemover.css"
/**
 * @param {Object} props
 * @param {string} [props.idCargo]
 * @param {Tabela} [props.cargos]
 *
 */
export default function CargosRemover({idCargo, cargos}){
    function deletar(){
        cargos.deletarPor("id", idCargo)
        cargos.enviarParaLocalStorage()
    }

    return(
        <>
            <button
                onClick={() => deletar()}
                className="cargos__remover"
            > ✕ </button>
        </>
    )
}
