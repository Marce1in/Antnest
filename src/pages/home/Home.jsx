import { Link } from "react-router-dom";
import { Modal } from "react-modal";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-16 bg-gray-700">
        <h1 className="text-3xl text-white">
          Ant<span className="text-red-500">Nest</span>
        </h1>
        <nav>
          <ul className="flex items-center">
            <div className="flex items-center gap-1">
              <li className="text-white">Guaxinim da Silva</li>
              <li>
                <img
                  src="./guaxinim.jpg"
                  alt=""
                  className="rounded-full w-16 h-16 mr-4 border-2 border-red-500 border-solid"
                />
              </li>
              <li>
                <Link to="/login" className="btn btn-primary">
                  Sair
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex flex-col py-16 px-36 gap-12">
          <h1 className="text-4xl font-bold">Area de Trabalho</h1>

          <div className="flex flex-col gap-10 mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl uppercase font-semibold">
                Seus projetos
              </h2>
              <button className="btn btn-primary">Criar</button>
            </div>
            <div className="grid">
              <div className="rounded-md border-solid border-black border-2 w-[17rem] h-[10rem] text-center">
                Projeto fake
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl uppercase font-semibold">
                Projetos convidados
              </h2>
            </div>
            <div className="grid">
              <div className="rounded-md border-solid border-black border-2 w-[17rem] h-[10rem] text-center">
                Projeto fake
              </div>
            </div>
          </div>
        
        </section>
      </main>
    </>
  );
}
