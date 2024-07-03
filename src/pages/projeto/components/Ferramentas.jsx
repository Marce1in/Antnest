import './Ferramentas.css'
//@ts-ignore
import FerramentasLista from './FerramentasLista'

export default function Ferramentas({modals}){

    return (
        <>
            <aside className="ferramentas">
                <ul className="ferramentas__container">
                    <FerramentasLista modals={modals}/>
                </ul>
            </aside>
        </>
    )
}
