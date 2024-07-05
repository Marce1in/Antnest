import "./Modal.css"
import { useEffect, useRef } from "react"

export default function Modal({modals, nome, children}){

    const modalRef = useRef(null)

    useEffect(() => {
    console.log(`Modal ${nome} state:`, modals[nome]);
        if (modals[nome] == true){
            modalRef.current.showModal()
        }
        else{
            modalRef.current.close()
        }
    }, [modals[nome]])

    return (
        <dialog className="modal" ref={modalRef} onCancel={() => modals[nome] = false}>
            <button
                className="modal__fechar"
                onClick={() => modals[nome] = false}
            > <span>✕</span> </button>
            {children}
        </dialog>
    )
}
