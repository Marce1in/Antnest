import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineCreate } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import "./FerramentasLista.css"
import { useNavigate } from "react-router-dom";
import Sessao from "@sessao";

export default function FerramentasLista({modals}){
    /** @type {cargo}*/
    const cargo = Sessao.obter("cargoSessao")

    const navegar = useNavigate()
    function sair(){
        Sessao.apagar("projetoSessao")
        Sessao.apagar("membroSessao")
        Sessao.apagar("cargoSessao")

        navegar("/")
    }

    return (
        <>
            {cargo.permissoes.tarefas &&
                <li role="button"
                    tabIndex={0}
                    onClick={() => modals.criar = true}
                >
                    <MdOutlineCreate  size="3.125rem"/>
                    <span>
                        Criar
                    </span>
                </li>
            }
            <li role="button"
                tabIndex={0}
                onClick={() => modals.membros = true}
            >
                <IoPeopleOutline  size="3.125rem"/>
                <span>
                    Membros
                </span>
            </li>
            <li role="button"
                tabIndex={0}
                onClick={() => modals.cargos = true}
            >
                <LuUserCog2 size="3.125rem"/>
                <span>
                    Cargos
                </span>
            </li>
            {cargo.permissoes.projeto &&
                <li role="button"
                    tabIndex={0}
                    onClick={() => modals.config = true}
                >
                    <HiOutlineCog6Tooth size="3.125rem"/>
                    <span>
                        Configurações
                    </span>
                </li>
            }
            <li role="button"
                tabIndex={0}
                onClick={() => sair()}
            >
                <CiLogout size="3.125rem"/>
                <span>
                    Sair
                </span>
            </li>
        </>
    )

}
