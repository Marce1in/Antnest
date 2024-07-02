import { vazio } from "@utils"
import "./Modal.css"
import { useEffect, useRef } from "react"

export default function Modal(modals, nome, children){

    const modalRef = useRef(null)

    useEffect(() => {
        console.log("problema", modals)
        if (vazio(nome)){
            console.log("CUUuuu")
            return
        }
        console.log("foo")
        console.log("objeto: ", modals)
        console.log("modal: ", modals[nome])
        console.log("estamos em: ", nome)
        if (modals[nome] == true){
            modalRef.current.showModal()
        }
        else{
            modalRef.current.close()
        }
    }, [])

    return (
        <dialog className="modal" ref={modalRef} onCancel={() => modals[nome] = false}>
            <button
                className="modal__fechar"
                onClick={() => modals[nome] = false}
            > ✕ </button>
            {children}
        </dialog>
    )
}
