import { useState } from "react"
import "./MembroConvidar.css"
import Tabela from "@tabela"
import { vazio } from "@utils"
import { Toaster, toast } from "sonner"
import Sessao from "@sessao"

/** 
 * @param {Object} props
 * @param {Tabela} props.membros
 * @param {*} props.modalControle
 */
export default function MembroConvidar({membros, modalControle}){
    const [email, setEmail] = useState("")

    function convidar(e){
        e.preventDefault()

        const usuario = Tabela.encontrarEmLocalStoragePor(
            "email",
            email,
            "usuario",
            true
        )

        if(vazio(usuario)){
            toast.error("Erro! esse e-mail não existe")
            return
        }

        const membrosUsario = membros.encontrarPor("idUsuario", usuario.id)

        if(!vazio(Tabela.encontrarEmTabelaPor("idProjeto", Sessao.obter("projetoSessao"), membrosUsario))){
            toast.error("Essa pessoa já está no projeto!")
            return
        }

        /** @type {Membro} */
        const membro = {
            id: crypto.randomUUID(),
            idProjeto: Sessao.obter("projetoSessao"),
            idCargo: "",
            idUsuario: usuario.id
        }

        membros.adicionar(membro)
        membros.enviarParaLocalStorage()

        modalControle.membroConvidar = false
    }

    return (
        <>
            <div className="convidar">
                <form className="convidar__form" onSubmit={(e) => convidar(e)}>
                    <label>
                        Email:
                        <input
                            required
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email do Usuário"
                        />
                    </label>
                        <input type="submit" value="Convidar"/>
                </form>
            </div>
            <Toaster richColors/>
        </>
    )
}
