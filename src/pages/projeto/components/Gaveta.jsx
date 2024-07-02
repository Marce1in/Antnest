import "./Gaveta.css"
import { useEffect, useRef } from "react"
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineCreate } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";
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
                        <HiBars3 size="3.125rem"/>
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Criar</span>
                        <MdOutlineCreate  size="3.125rem"/>
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Membros</span>
                        <IoPeopleOutline  size="3.125rem"/>
                    </li>
                    <li role="button" tabIndex={0}>
                        <span>Cargos</span>
                        <LuUserCog2 size="3.125rem"/>
                    </li>
                    <li role="button" className="gaveta__Icone" tabIndex={0}>
                        <span>Configurações</span>
                        <HiOutlineCog6Tooth size="3.125rem"/>
                    </li>
                </ul>
            </div>
        </dialog>
    )
}
