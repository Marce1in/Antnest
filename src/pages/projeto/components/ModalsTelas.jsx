import Modal from "./Modal";
import MembrosLista from "./MembrosLista"
import CargosLista from "./CargosLista";
import CriarTarefa from "./CriarTarefa";
import Sessao from "@sessao";
import MembroAdministrar from "./MembroAdministrar";
import { useTabela } from "@useTabela";

export default function ModalsTelas({modals, tarefas}){
    function carregarMembros(){
        const membrosTabela = useTabela("membro")
        const membros = membrosTabela.encontrarPor("idProjeto", Sessao.obter("projetoSessao"))

        return {membros: membros, membrosTabela: membrosTabela}
    }

    return (
        <>
            { modals.criar &&
                <Modal modals={modals} nome="criar">
                    <CriarTarefa tarefas={tarefas}/>
                </Modal>
            }
            { modals.membros &&
                <Modal modals={modals} nome="membros">
                    <MembrosLista {...carregarMembros()}>
                        <MembroAdministrar/>
                    </MembrosLista>
                </Modal>
            }
            { modals.cargos &&
                <Modal modals={modals} nome="cargos">
                    <CargosLista>
                    </CargosLista>
                </Modal>
            }
            { modals.config &&
                <Modal modals={modals} nome="config">
                    <div>Modal de configs</div>
                </Modal>
            }
        </>
    )
}
