import "./Gaveta.css"
import { useEffect, useRef } from "react"
import { HiBars3 } from "react-icons/hi2";
//@ts-ignore
import FerramentasLista from "./FerramentasLista";

/**
 * @param {Object} props
 * @param {Object} props.modals - Atualiza a variável de Estado
 */
export default function Gaveta({modals}){

    const drawerRef = useRef(null)

    useEffect(() => {
        if (modals.gaveta == true){
            drawerRef.current.showModal()
        }
        else{
            drawerRef.current.close()
        }
    }, [modals.gaveta])

    return (
        <dialog className="gaveta" ref={drawerRef} onCancel={() => modals.gaveta = false}>
            <div className="gaveta__container">
                <ul className="gaveta__butoes">
                    <li role="button" tabIndex={0} onClick={() => modals.gaveta = false}>
                        <HiBars3 size="3.125rem"/>
                    </li>
                    <FerramentasLista modals={modals} />
                </ul>
            </div>
        </dialog>
    )
}
