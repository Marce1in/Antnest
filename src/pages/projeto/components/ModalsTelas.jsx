import Modal from "./Modal";

export default function ModalsTelas({modals}){
    return (
        <>
            { modals.criar &&
                <Modal modals={modals} nome="criar">
                    <div>Modal de criar</div>
                </Modal>
            }
            { modals.membros &&
                <Modal modals={modals} nome="membros">
                    <div>Modal de Membros</div>
                </Modal>
            }
            { modals.cargos &&
                <Modal modals={modals} nome="cargos">
                    <div>Modal de Cargos</div>
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
