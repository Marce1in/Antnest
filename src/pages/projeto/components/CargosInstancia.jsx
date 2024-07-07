import "./CargosInstancia.css"

export default function CargosInstancia({children}){
    return (
        <>
            <li className="cargo">
                <details className="cargo__dropdown" name="cargos">
                    <summary>Admin</summary>
                    <ul className="cargo__permissoes">
                        <li>Tarefas</li>
                        <li>Membros</li>
                        <li>Cargos</li>
                        <li>Projeto</li>
                    </ul>
                </details>
                {children}
            </li>
        </>
    )
}
