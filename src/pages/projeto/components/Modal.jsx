import "./Modal.css"
import { useEffect, useRef } from "react"

/**
 * @param {Object} props
 * @param {boolean} props.modalState - Controla a visibilidade do Modal
 * @param {Function} props.setModal - Atualiza a variável de Estado
 */
export default function Modal({modalState, setModal}){

    const modalRef = useRef(null)

    useEffect(() => {
        if (modalState == true){
            modalRef.current.showModal()
        }
        else{
            modalRef.current.close()
        }
    }, [modalState])

    return (
        <dialog className="modal" ref={modalRef} onCancel={() => setModal(false)}>
            <button
                className="modal__fechar"
                onClick={() => setModal(false)}
            > ✕ </button>
        </dialog>
    )
}
