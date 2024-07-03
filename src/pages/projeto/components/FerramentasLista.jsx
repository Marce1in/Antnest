import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineCreate } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import "./FerramentasLista.css"

export default function FerramentasLista({modals}){
    return (
        <>
            <li role="button"
                tabIndex={0}
                onClick={() => modals.criar = true}
            >
                <MdOutlineCreate  size="3.125rem"/>
                <span>
                    Criar
                </span>
            </li>
            <li role="button"
                tabIndex={0}
                onClick={() => modals.criar = true}
            >
                <IoPeopleOutline  size="3.125rem"/>
                <span>
                    Membros
                </span>
            </li>
            <li role="button"
                tabIndex={0}
                onClick={() => modals.criar = true}
            >
                <LuUserCog2 size="3.125rem"/>
                <span>
                    Cargos
                </span>
            </li>
            <li role="button"
                tabIndex={0}
                onClick={() => modals.criar = true}
            >
                <HiOutlineCog6Tooth size="3.125rem"/>
                <span>
                    Configurações
                </span>
            </li>
        </>
    )

}
