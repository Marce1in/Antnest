import Tabela from "@tabela"
import { vazio } from "@utils"

/** 
 * @param {Object} props
 * @param {Tabela} props.relacionamento
 * @param {RelacionamentoTarefaMembro[]} props.tarefaRelacoes
 * @param {string} props.idTarefa
 * @param {string} [props.idMembro]
 * @param {Tabela} [props.membros]
 */
export default function TarefaAlocar({idMembro, membros, relacionamento, tarefaRelacoes, idTarefa}){

    const alocado = !vazio(
        Tabela.encontrarEmTabelaPor(
            "idMembro",
            idMembro,
            tarefaRelacoes,
            true
        )
    )

    function alocar(){
        /** @param {RelacionamentoTarefaMembro}*/
        const relacao = {
            idTarefa: idTarefa,
            idMembro: idMembro
        }

        relacionamento.adicionar(relacao)
    }
    function desalocar(){
        relacionamento.deletarPelos(["idTarefa", "idMembro"], [idTarefa, idMembro])
    }


    return (
        <>
            {alocado ?
                <button 
                    onClick={() => desalocar()}
                > - </button>
                :
                <button 
                    onClick={() => alocar()}
                > + </button>
            }
        </>
    )
}
