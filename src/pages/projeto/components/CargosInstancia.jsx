import "./CargosInstancia.css"

/** 
 * @param {Object} prop
 * @param {import("react").ReactNode} [prop.children]
 * @param {string} prop.nome
 * @param {{
 *  tarefas: boolean,
 *  membros: boolean,
 *  cargos: boolean,
 *  projeto: boolean,
 * }} prop.permissoes
 */
export default function CargosInstancia({children, nome, permissoes}){
    function nenhumaPermissao(){
        return !Object.values(permissoes).some((perm) => perm)
    }
    return (
        <>
            <li className="cargo">
                <details className="cargo__dropdown" name="cargos">
                    <summary>{nome}</summary>
                        <ul className="cargo__permissoes">
                            {permissoes.tarefas && <li>Tarefas</li>}
                            {permissoes.membros && <li>Membros</li>}
                            {permissoes.cargos  && <li>Cargos</li>}
                            {permissoes.projeto && <li>Projeto</li>}
                            {nenhumaPermissao() && <li>Nada :(</li>}
                        </ul>
                </details>
                {children}
            </li>
        </>
    )
}
