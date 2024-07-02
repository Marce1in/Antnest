import './Ferramentas.css'
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineCreate } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";
//@ts-ignore
import placeholder from '../assets/placeholder.svg'

export default function Ferramentas(){
    const Icon = () => <img src={placeholder} />

    return (
        <>
            <aside className="ferramentas">
                <ul className="ferramentas__container">
                    <li role="button" tabIndex={0}>
                        <MdOutlineCreate  size="3.125rem"/>
                        <span>
                            Criar
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <IoPeopleOutline  size="3.125rem"/>
                        <span>
                            Membros
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <LuUserCog2 size="3.125rem"/>
                        <span>
                            Cargos
                        </span>
                    </li>
                    <li role="button" tabIndex={0}>
                        <HiOutlineCog6Tooth size="3.125rem"/>
                        <span>
                            Configurações
                        </span>
                    </li>
                </ul>
            </aside>
        </>
    )
}
