import "./Gaveta.css"
import { useEffect, useRef } from "react"
//@ts-ignore
import placeholder from '../assets/placeholder.svg'
import { controlarModals } from "../helpers/useModal"

/**
 * @param {Object} props
 * @param {controlarModals} props.modalsController - Atualiza a variável de Estado
 */
export default function Gaveta({modalsController}){
    const Icon = () => <img src={placeholder} />

    const drawerRef = useRef(null)

    useEffect(() => {
        if (modalsController.gaveta == true){
            drawerRef.current.showModal()
        }
        else{
            drawerRef.current.close()
        }
    }, [modalsController.gaveta])

    return (
        <dialog className="gaveta" ref={drawerRef} onCancel={() => modalsController.gaveta = false}>
            <div className="gaveta__container">
                <ul className="gaveta__butoes">
                    <li role="button" tabIndex={0} onClick={() => modalsController.gaveta = false}>
                        <Icon />
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Criar</span>
                        <Icon />
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Membros</span>
                        <Icon />
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Cargos</span>
                        <Icon />
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Configurações</span>
                        <Icon />
                    </li>
                </ul>
            </div>
        </dialog>
    )
}
