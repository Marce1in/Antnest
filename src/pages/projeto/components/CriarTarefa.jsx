import "./CriarTarefa.css"
export default function CriarTarefa(){

    return (
        <>
            <div className="criarTarefa">
                <div className="criarTarefa__cabecalho">
                    <h2>Criar Tarefa</h2>
                    <hr />
                </div>
                <form id="criarTarefa" className="criarTarefa__form">
                    <label className="criarTarefa__nome">
                        <input placeholder="Nome" type="text"/>
                    </label>
                    <label className="criarTarefa__data">
                        <input type="date"/>
                    </label>
                    <textarea placeholder="Descrição..." className="criarTarefa__descricao"/>
                </form>
                <div className="criarTarefa__criar">
                    <input
                        type="submit"
                        form="criarTarefa"
                        value="Criar"
                    />
                </div>
            </div>
        </>
    )
}
