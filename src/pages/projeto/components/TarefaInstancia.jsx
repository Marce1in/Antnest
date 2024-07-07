import "./TarefaInstancia.css"

export default function TarefaInstancia({nome, data, onClick}){
    return (
        <>
            <li
                role="button"
                tabIndex={0}
                className="tarefa"
                onClick={onClick}
            >
                <span>{nome}</span>
                <time>{data}</time>
            </li>
        </>
    )
}
