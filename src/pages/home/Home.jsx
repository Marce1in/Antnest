import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-16 bg-gray-700">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl">Ant<span className="text-red-500">Nest</span></h1>
          <button className="mr-5 btn btn-primary">Criar</button>
        </div>
        <nav>
          <ul className="flex items-center">
            <div className="flex items-center gap-1">
              <li className="text-white">Guaxinim da Silva</li>
              <li>
                <img
                  src="./guaxinim.jpg"
                  alt=""
                  className="rounded-full w-16 h-16 mr-4"
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
        <section>
          <h1 className="font-sans text-5xl text-center text-red-600">
            Eu sou uma linda home-page
          </h1>
        </section>
      </main>
    </>
  );
}
