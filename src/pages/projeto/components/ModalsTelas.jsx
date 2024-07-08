import Modal from "./Modal";
import MembrosLista from "./MembrosLista"
import CargosLista from "./CargosLista";
import CriarTarefa from "./CriarTarefa";
import Sessao from "@sessao";
import MembroAdministrar from "./MembroAdministrar";
import { useTabela } from "@useTabela";
import CargosRemover from "./CargosRemover";

export default function ModalsTelas({modals, tarefas}){
    /**
     * @type {cargo}
     */
    const cargo = Sessao.obter("cargoSessao")

    function carregarMembros(){
        const membrosTabela = useTabela("membro")
        const membros = membrosTabela.encontrarPor("idProjeto", Sessao.obter("projetoSessao"))

        return {membros: membros, membrosTabela: membrosTabela}
    }

    return (
        <>
            { (modals.criar && cargo.permissoes.tarefas) &&
                <Modal modals={modals} nome="criar">
                    <CriarTarefa tarefas={tarefas}/>
                </Modal>
            }
            { modals.membros &&
                <Modal modals={modals} nome="membros">
                    <MembrosLista {...carregarMembros()} criar={cargo.permissoes.membros}>
                        { cargo.permissoes.membros &&
                            <MembroAdministrar/>
                        }
                    </MembrosLista>
                </Modal>
            }
            { modals.cargos &&
                <Modal modals={modals} nome="cargos">
                    <CargosLista criar={cargo.permissoes.cargos}>
                        { cargo.permissoes.cargos &&
                            <CargosRemover />
                        }
                    </CargosLista>
                </Modal>
            }
            { (modals.config && cargo.permissoes.projeto) &&
                <Modal modals={modals} nome="config">
                    <div>Modal de configs</div>
                </Modal>
            }
        </>
    )
}
