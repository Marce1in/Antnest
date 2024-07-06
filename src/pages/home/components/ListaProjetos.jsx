import Sessao from "@sessao";
import Tabela from "@tabela";

import { useNavigate } from "react-router-dom";


export default function ListaProjetos({ id }) {
  const navigator = useNavigate();
  const projetos = new Tabela("projeto");
  const projetosUsuario = projetos.encontrarPor("idDono", id);
  

  const Listagem = projetosUsuario.map((projeto) => {
    const membros = new Tabela("membro");

    function deleteProjeto() {
      projetos.deletarPor("id", projeto.id);
      membros.deletarPor("idProjeto", projeto.id);
      projetos.enviarParaLocalStorage();
      membros.enviarParaLocalStorage();
    }

    function entrarProjeto() {
      Sessao.criar(projeto.id, "projetoSessao");
      navigator("/projeto")
    }

    return (
      <div className="flex flex-col bg-accent items-center gap-8 border-black border-solid border-2 rounded p-4 min-w-64 max-h-56 box-content">
        <h1 className="text-2xl text-center">{projeto.nome}</h1>
        <h2 className="text-center w-52 text-base">{projeto.descricao}</h2>
        <div className="flex gap-2">
          <button className="bg-primary text-text py-2 px-4 rounded w-28 hover:bg-white focus:w-24 focus:h-8 text-center duration-500" onClick={deleteProjeto}>
            deletar
          </button>
          <button className="bg-primary text-text py-2 px-4 rounded w-28 hover:bg-white focus:w-24 focus:h-8 text-center duration-500" onClick={entrarProjeto}>entrar</button>
        </div>
      </div>
    );
  });

  return <>{Listagem}</>;
}
