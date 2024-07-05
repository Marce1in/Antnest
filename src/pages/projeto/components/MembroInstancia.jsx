import "./MembroInstancia.css"

/**
 * @param {Object} props
 * @param {string} props.nome
 * @param {string} props.cargo
 * @param {string} props.foto
 * @param {import("react").ReactNode} [props.children]
 */
export default function MembroInstancia({nome, cargo, foto, children}){
    return(
        <>
            <li className="membro">
                <img src={foto} alt={nome} />
                <div className="membro__nome">
                    <span>{nome}</span>
                    <small>{cargo}</small>
                </div>
                {children}
            </li>
        </>
    )
}
