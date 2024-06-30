import "./Drawer.css"
import { useEffect, useRef } from "react"
//@ts-ignore
import placeholder from '../assets/placeholder.svg'

/**
 * @param {Object} props
 * @param {boolean} props.drawerState - Controla a visibilidade da Gaveta
 * @param {Function} props.setDrawer - Atualiza a variável de Estado
 */
export default function Drawer({drawerState, setDrawer}){
    const Icon = () => <img src={placeholder} />

    const drawerRef = useRef(null)

    useEffect(() => {
        if (drawerState == true){
            drawerRef.current.showModal()
        }
        else{
            drawerRef.current.close()
        }
    }, [drawerState])

    return (
        <dialog className="gaveta" ref={drawerRef} onCancel={() => setDrawer(false)}>
            <div className="gaveta__container">
                <ul className="gaveta__butoes">
                    <li role="button" tabIndex={0} onClick={() => setDrawer(false)}>
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
