import Sessao from "@sessao"
import Tabela from "@tabela"
import { vazio } from "@utils"

//Descobre qual cargo o membro pertence, se não tiver cargo é criado um cargo
//falso com nenhuma permissão, mas se for o dono é criado um cargo falso com
//todas permissões
export default function encontrarCargo(){
    /** @type {Membro}*/
    const membro = Tabela.encontrarEmLocalStoragePor(
        "id",
        Sessao.obter("membroSessao"),
        "membro",
        true
    )

    if(!membro.idCargo){
        return criarCargosFalsos()
    }

    const cargoUsuario = Tabela.encontrarEmLocalStoragePor(
        "id",
        membro.idCargo,
        "cargo",
        true
    )

    if(vazio(cargoUsuario)){
        return criarCargosFalsos()
    }
    console.log("fooo")
    return cargoUsuario
}

//Verifica se o usuário é o dono do projeto
const dono = () =>
    Tabela.encontrarEmLocalStoragePor(
        "id",
        Sessao.obter("projetoSessao"),
        "projeto",
        true
    ).idDono
        ===
        Tabela.encontrarEmLocalStoragePor(
            "id",
            Sessao.obter(),
            "usuario",
            true
        ).id

function criarCargosFalsos(){
    if(!dono()){
        /** @type {Cargo} */
        const cargoDono = {
            id: "0",
            idProjeto: "0",
            nome: "",
            permissoes: {
                "tarefas": true,
                "membros": true,
                "cargos": true,
                "projeto": true
            }
        }

        return cargoDono
    }

    else {
        const cargoVisitante = {
            id: "0",
            idProjeto: "0",
            nome: "",
            permissoes: {
                "tarefas": false,
                "membros": false,
                "cargos": false,
                "projeto": false
            }
        }

        return cargoVisitante
    }
}
