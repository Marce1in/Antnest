import { useForm } from "react-hook-form"
import "./CargosCriar.css"
import Tabela from "@tabela"
import Sessao from "@sessao"

/** @param {Object} props
* @param {Tabela} props.cargos */
export default function CargosCriar({cargos}){

    const {handleSubmit, register} = useForm()

    function CriarCargo(data){
        /** @type {Cargo}*/
        const cargo = {
            id: crypto.randomUUID(),
            idProjeto: Sessao.obter("projetoSessao"),
            nome: data.nome,
            permissoes: {
                tarefas: data.tarefa,
                cargos: data.cargo,
                projeto: data.projeto,
                membros: data.membro,
            }
        }

        cargos.adicionar(cargo)
        cargos.enviarParaLocalStorage()
    }

    return(
        <>
            <div className="criarCargo w-64">
                <form
                    onSubmit={handleSubmit(CriarCargo)} 
                    className="criarCargo__form flex flex-col"
                >
                    <label>
                        Nome
                        <input
                            type="text"
                            required
                            {...register("nome")}
                            placeholder="nome"
                        />
                    </label>
                    <div className="flex flex-col" className="criarCargo__perm">
                        <span>Administrar</span>
                        <label>
                            Tarefas
                            <input {...register("tarefa")} type="checkbox"/>
                        </label>
                        <label>
                            Cargos
                            <input {...register("cargo")} type="checkbox"/>
                        </label>
                        <label>
                            Membros
                            <input {...register("membro")} type="checkbox"/>
                        </label>
                        <label>
                            Projeto
                            <input {...register("projeto")} type="checkbox"/>
                        </label>
                    </div>
                    <button type="submit">Criar</button>
                </form>
            </div>

        </>
    )
}
