import { Link } from "react-router-dom"

export default function Login(){
    return (
        <>
            <h1 className="font-sans text-5xl text-center text-red-600">Eu sou uma linda página de login :)</h1>
            <Link to="/" className="btn btn-error">Devolta a home</Link>
        </>
    )
}
