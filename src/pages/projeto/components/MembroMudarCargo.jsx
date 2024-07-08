import Sessao from "@sessao"
import Tabela from "@tabela"

/** @param {Object} props
* @param {string} props.membroId
* @param {string} props.idCargo
* @param {Tabela} props.membrosTabela
*/
export default function MembroMudarCargo({membroId, idCargo, membrosTabela}){

    function mudarCargo(){
        membrosTabela.mudarPor("id", membroId, {idCargo: idCargo}, true)
        membrosTabela.enviarParaLocalStorage()

        if (membroId == Sessao.obter("membroSessao")){
            Sessao.criar(
                Tabela.encontrarEmLocalStoragePor(
                    "id",
                    idCargo,
                    "cargo",
                    true
                ),
                "cargoSessao",
            )
        }
    }

    return (
        <>
            <button
                onClick={() => mudarCargo()}
            > o </button>
        </>
    )
}
