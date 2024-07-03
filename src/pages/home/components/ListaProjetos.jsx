import Tabela from "@tabela";

export default function ListaProjetos({ id }) {
  const projetos = new Tabela("projeto");
  const projetosUsuario = projetos.encontrarPor("idDono", id);

  const Listagem = projetosUsuario.map((projeto) => {
    function deleteProjeto() {
      projetos.deletarPor("id", projeto.id);
      projetos.enviarParaLocalStorage();
    }

    return (
      <div className="flex flex-col items-center gap-8 border-black border-solid border-2 rounded p-4">
        <h1 className="text-2xl">{projeto.nome}</h1>
        <h2 className="text-center w-52 text-base">{projeto.descricao}</h2>
        <div>
          <button className="bg-primary text-text py-2 px-4 rounded w-28" onClick={deleteProjeto}>
            deletar
          </button>
        </div>
      </div>
    );
  });

  return <>{Listagem}</>;
}
