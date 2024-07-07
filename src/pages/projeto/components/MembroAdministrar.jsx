import { LuUserCog2 } from "react-icons/lu";
import "./MembroAdministrar.css"

export default function MembroAdministrar(){
    return(
        <>
            <button>
                <LuUserCog2 color="green" size="1.5rem"/>
            </button>
            <button className="membroAdministrar__remover">
                ✕
            </button>
        </>
    )
}
