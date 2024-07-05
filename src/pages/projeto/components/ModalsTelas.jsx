import Modal from "./Modal";
import MembrosLista from "./MembrosLista"
import CargosLista from "./CargosLista";

export default function ModalsTelas({modals}){
    return (
        <>
            { modals.criar &&
                <div>Modal de Criar</div>
            }
            { modals.membros &&
                <Modal modals={modals} nome="membros">
                    <MembrosLista>
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
