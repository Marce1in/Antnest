export default function TarefaModal(){
    return (
        <>
            <div className="tarefaModalAdm">
                <div className="tarefaModalAdm__cabecalho">
                    <input value="Tarefa" />
                    <hr />
                </div>

                <form className="tarefaModalAdm__form">
                    <div className="tarefaModal__">
                        <button>Gerenciar Membros</button>
                    </div>
                    <div>
                        <input type="date" />
                        <input type="checkbox" />
                    </div>
                    <textarea>Namora comigo? Gatinha manhosa</textarea>
                </form>

                <div>
                    <button>Salvar</button>
                    <button>Participar</button>
                    <button>Deletar</button>
                </div>
            </div>
        </>
    )
}
