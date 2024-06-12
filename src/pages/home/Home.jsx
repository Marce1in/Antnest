import { Link } from "react-router-dom"

export default function Home(){
    return (
        <>
            <h1 className="font-sans text-5xl text-center text-red-600">Eu sou uma linda home-page</h1>
            <Link to="/login" className="btn btn-primary">Ir para pagina de login maneira</Link>
        </>
    )
}
