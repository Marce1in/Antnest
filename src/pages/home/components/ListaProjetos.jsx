import Tabela from "@tabela";
import { useTabela } from "@useTabela";

export default function ListaProjetos({ id }) {
  const projetos = new Tabela("projetos");
  const projetosUsuario = projetos.encontrarUmPor("idDono", id);


  return (
    <>
      {projetosUsuario.idDono == id && (
        <div className="flex flex-col items-center gap-8 border-black border-solid border-2 rounded p-4">
          <h1>{projetosUsuario.nome}</h1>
          <h2 className="text-center w-52">{projetosUsuario.descricao}</h2>
        </div>
      )}
    </>
  );
}
