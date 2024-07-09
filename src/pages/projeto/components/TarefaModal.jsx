import { useForm } from "react-hook-form"
import "./TarefaModal.css"
import Tabela from "@tabela"
import Modal from "./Modal"
import MembrosLista from "./MembrosLista"
import { useTabela } from "@useTabela"
import { vazio } from "@utils"
import Sessao from "@sessao"
import TarefaAlocar from "./TarefaAlocar"

/**
 * @param {Object} props
 * @param {{tarefa: boolean, membrosAlocados: boolean}} props.modalControle
 * @param {Tabela} props.tarefas
 * @param {Tarefa} props.tarefa
 * @param {boolean} [props.admin=true]
 */
export default function TarefaModal({modalControle, tarefas, tarefa, admin = true}){
    const relacionamentos = useTabela("relacionamentoTarefaMembro")
    const tarefaRelacoes = relacionamentos.encontrarPor("idTarefa", tarefa.id)
    const membros = useTabela("membro")

    console.log("foo",tarefaRelacoes)

    function relaMembroTarefa(){
        const membrosTabela = new Tabela("membro")

        /** @type {RelacionamentoTarefaMembro[]}*/
        const relacionamentosTarefa = relacionamentos.encontrarPor("idTarefa", tarefa.id)

        const membrosNaTarefa = relacionamentosTarefa.map(
            relacionamento => {
                return membrosTabela.encontrarUmPor("id", relacionamento.idMembro)
            }
        )

        return membrosNaTarefa
    }

    const {handleSubmit, register} = useForm({
        defaultValues: {
            nome: tarefa.nome,
            data: tarefa.dataExpiracao,
            status: tarefa.status == 2,
            descricao: tarefa.descricao,
        }
    })

    //Me desculpa.
    //
    //Isso basicamente vê se o membro está alocado em uma tarefa,
    //Para isso ele precisa encontrar a tarefa na tabela de relacionamentos,
    //Depois de pegar todas as instancias da tarefa na tabela de relacionamentos
    //a gente precisa ver se o id do membro está em alguma dessas instâncias,
    //esse código básicamente faz isso.
    //
    //O clássico muitos por muitos.
    //
    //Para fechar com chave de ouro, ele retorna false se não houver nenhum
    //relacionamento com essa combinação e true se houver (se no final de tudo o 
    //objeto não estiver vazio)
    //
    //Esse texto inteiro não faz mais tanto sentido pois eu simplifiquei umas partes
    //e agora está relativamente decente, vou deixar essa comentário apenas por
    //motivos históricos.
    const alocado = vazio(
        Tabela.encontrarEmTabelaPor(
            "idMembro",
            Sessao.obter("membroSessao"),
            tarefaRelacoes,
            true
        )
    )

    function alocarse(){
        /** @type {RelacionamentoTarefaMembro}*/
        const relacionamento = {
            idMembro: Sessao.obter("membroSessao"),
            idTarefa: tarefa.id,
        }

        relacionamentos.adicionar(relacionamento)
        relacionamentos.enviarParaLocalStorage()
    }

    function deletarTarefa(){
        tarefas.deletarPor("id", tarefa.id)
        tarefas.enviarParaLocalStorage()

        modalControle.tarefa = false
    }


    /**
     * @param {Object} data
     * @param {string} data.nome
     * @param {string} data.data
     * @param {boolean} data.status
     * @param {string} data.descricao
     */
    function editarTarefa(data){
        console.log(data)
        tarefas.mudarPor("id", tarefa.id, {
            "nome": data.nome,
            "dataExpiracao": data.data,
            "status": data.status ? 2 : vazio(tarefaRelacoes) ? 0 : 1,
            "descricao": data.descricao,
        })

        modalControle.tarefa = false
    }

    return (
        <>
            <div className="tarefaModal">
                <div className="tarefaModal__cabecalho">
                    {admin ?
                        <input
                            type="text"
                            {...register("nome")}
                        />
                        :
                        <h2>
                            {tarefa.nome}
                        </h2>
                    }
                    <hr />
                </div>

                <form
                    id="tarefaForm"
                    className="tarefaModal__form"
                    onSubmit={handleSubmit(editarTarefa)}
                >
                    <div className="tarefaModal__membros">
                        {admin ?
                            <button
                                type="button"
                                onClick={()=>modalControle.membrosAlocados=true}
                            > Gerenciar Membros </button>
                            :
                            <button
                                type="button"
                                onClick={()=>modalControle.membrosAlocados=true}

                            > Ver Membros
                            </button>
                        }
                    </div>
                    <div className="tarefaModal__status">
                        <label>
                            <div>
                                {admin ?
                                    <>
                                        <span>Data</span>
                                        <input
                                            type="date"
                                            {...register("data")}
                                        />
                                    </>
                                    : tarefa.dataExpiracao &&
                                    <>
                                        <span>Data</span>
                                        <time>{tarefa.dataExpiracao}</time>
                                    </>
                                }
                            </div>
                        </label>
                        <label>
                            <span>Concluído:</span>
                            <input
                                type="checkbox"
                                className="tarefaModal__customCheckbox"
                                {...register("status")}
                            />
                        </label>
                    </div>

                    <textarea
                        readOnly = {!admin}
                        placeholder="descrição..." 
                        className="tarefaModal__descricao"
                        {...register("descricao")}
                    />
                </form>

                <div className="tarefaModal__botoes">
                    <button
                        type="submit"
                        form="tarefaForm"
                        className="tarefaModal__salvar"
                    >
                        Salvar
                    </button>
                    { alocado &&
                        <button
                            className="tarefaModal__participar"
                            onClick={() => alocarse()}
                        >
                            Participar
                        </button>
                    }
                    {admin &&
                        <button 
                            className="tarefaModal__deletar"
                            onClick={() => deletarTarefa()}
                        >
                            Deletar
                        </button>
                    }
                </div>
            </div>

            {modalControle.membrosAlocados &&
                <Modal modals={modalControle} nome="membrosAlocados">
                    { admin ?
                        <MembrosLista
                            membrosTabela={membros}
                            membros={
                                Tabela.encontrarEmLocalStoragePor(
                                    "idProjeto",
                                    Sessao.obter("projetoSessao"),
                                    "membro")
                            }
                        >
                            <TarefaAlocar
                                idTarefa={tarefa.id}
                                relacionamento={relacionamentos}
                                tarefaRelacoes={tarefaRelacoes}
                            />
                        </MembrosLista>
                        :
                        <MembrosLista
                            membrosTabela={membros}
                            membros={relaMembroTarefa()}
                            children={false}
                        />
                    }
                </Modal>
            }
        </>
    )
}
