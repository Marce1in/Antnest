import "./Gaveta.css"
import { useEffect, useRef } from "react"
//@ts-ignore
import placeholder from '../assets/placeholder.svg'

/**
 * @param {Object} props
 * @param {Object} props.modals - Atualiza a variável de Estado
 */
export default function Gaveta({modals}){
    const Icon = () => <img src={placeholder} />

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
