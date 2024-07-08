import Sessao from "@sessao"
import Tabela from "@tabela"
import { vazio } from "@utils"

//Descobre qual membro entrou no projeto e registra ele criando uma sessão
export default function encontrarMembro(){
    const membrosProjeto = Tabela.encontrarEmLocalStoragePor(
        "idProjeto",
        Sessao.obter("projetoSessao"),
        "membro"
    )

    if (vazio(membrosProjeto)){
        const membros = new Tabela("membro")

        /** @type {Membro}*/
        const membro = {
            id: crypto.randomUUID(),
            idCargo: "",
            idUsuario: Sessao.obter(),
            idProjeto: Sessao.obter("projetoSessao")
        }

        membros.adicionar(membro)
        membros.enviarParaLocalStorage()

        return membro.id
    }
    else {
        const membroLogado = Tabela.encontrarEmTabelaPor("idUsuario", Sessao.obter(), membrosProjeto, true)

        return membroLogado.id
    }

}
