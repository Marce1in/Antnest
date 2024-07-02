import "./Drawer.css"
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
 * @param {boolean} props.drawerState - Controla a visibilidade da Gaveta
 * @param {Function} props.setDrawer - Atualiza a variável de Estado
 */
export default function Gaveta({drawerState, setDrawer}){
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
