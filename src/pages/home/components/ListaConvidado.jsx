import Sessao from "@sessao";
import Tabela from "@tabela";
import { useNavigate } from "react-router-dom";

export default function ListaConvidado({ id }){
    const navigator = useNavigate();
    const membros = new Tabela("membro");
    const membrosProjects = membros.encontrarPor("idUsuario", id);

    const Listagem = membrosProjects.map((membro) => {
        const projetos = new Tabela("projeto");
        const projeto = projetos.encontrarPor("id", membro.idProjeto);


        const listagemProjetos = projeto.map((projeto) => {

            function entrarProjeto() {
                Sessao.criar(projeto.id, "projetoSessao");
                navigator("/projeto")
              }


            if(projeto.idDono === id){
                null
            }else{
                return(
                    <div className="flex flex-col bg-accent justify-center items-center gap-8 border-black border-solid border-2 rounded p-4 min-w-64 max-h-56 min-h-48 box-content cursor-pointer">
                        <h1 className="text-2xl text-center">{projeto.nome}</h1>
                        <h2 className="text-center w-52 text-base">{projeto.descricao}</h2>
                        <div>
                            <button className="bg-primary text-text py-2 px-4 rounded w-28 hover:bg-white focus:w-24 focus:h-8 text-center duration-500" onClick={entrarProjeto}>entrar</button>
                        </div>
                    </div>
                )
            }
            
        });
        return listagemProjetos;
    });

    
    return(
        <>
        {Listagem}
        </>
    )
}