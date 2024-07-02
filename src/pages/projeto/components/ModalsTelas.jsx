import Modal from "./Modal";

export default function ModalsTelas({modals}){
    return (
        <>
            <Modal modals={modals} nome="criar">
                <div>Modal de criar</div>
            </Modal>
            <Modal modals={modals} nome="membros">
                <div>Modal de Membros</div>
            </Modal>
            <Modal modals={modals} nome="cargos">
                <div>Modal de Cargos</div>
            </Modal>
            <Modal modals={modals} nome="config">
                <div>Modal de configs</div>
            </Modal>
        </>
    )
}