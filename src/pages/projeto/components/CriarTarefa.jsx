import "./CriarTarefa.css"
import { useForm } from "react-hook-form"
import Tabela from "@tabela"
import Sessao from "@sessao"

/**
 * @param {Object} props
 * @param {Tabela} props.tarefas
 *
 */
export default function CriarTarefa({tarefas}){

    const {handleSubmit, register, reset} = useForm({
        defaultValues: {
            nome: "",
            descricao: "",
            data: ""
        }
    })

    /** @param {{nome: string, descricao: string, data: string}} data */
    function criarTarefa(data){
        /** @type {Tarefa}*/
        const tarefa = {
            id: crypto.randomUUID(),
            nome: data.nome,
            descricao: data.descricao,
            dataExpiracao: data.data,
            idProjeto: Sessao.obter("projetoSessao"),
            status: 0
        }

        tarefas.adicionar(tarefa)
        tarefas.enviarParaLocalStorage()

        reset()
    }

    return (
        <>
            <div className="criarTarefa">
                <div className="criarTarefa__cabecalho">
                    <h2>Criar Tarefa</h2>
                    <hr />
                </div>
                <form
                    id="criarTarefa"
                    className="criarTarefa__form"
                    onSubmit={handleSubmit(criarTarefa)}
                >
                    <label className="criarTarefa__nome">
                        <input
                            placeholder="Nome"
                            type="text"
                            {...register("nome", {required: true})}
                        />
                    </label>
                    <label className="criarTarefa__data">
                        <input
                            type="date"
                            {...register("data")}
                        />
                    </label>
                    <textarea
                        placeholder="Descrição..."
                        className="criarTarefa__descricao"
                        {...register("descricao")}
                    />
                </form>
                <div className="criarTarefa__criar">
                    <input
                        type="submit"
                        form="criarTarefa"
                        value="Criar"
                    />
                </div>
            </div>
        </>
    )
}
