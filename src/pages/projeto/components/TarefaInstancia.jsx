import "./TarefaInstancia.css"

export default function TarefaInstancia({nome, data, status, onClick}){
    return (
        <>
            <li
                role="button"
                tabIndex={0}
                className="tarefa"
                onClick={onClick}
                style={{backgroundColor: 
                    status == 0 ? "white" : 
                        status == 1 ? "lightgoldenrodyellow" :
                    status == 2 ? "lightgreen" :
                    "lightpink"}}
            >
                <span>{nome}</span>
                <time>{data}</time>
            </li>
        </>
    )
}
