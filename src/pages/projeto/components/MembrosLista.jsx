import './MembrosLista.css'
//@ts-ignore
import placeholder from '../assets/placeholder.svg'

export default function MembrosLista({children}){

    return (
        <>
            <div className="membros">
                <ul className="membros__lista">
                    <li>
                        <img src={placeholder} />
                        <div className="membros__nome">
                            <span>João que matou o Cheske</span>
                            <small>Garoto de programa</small>
                        </div>
                        {children}
                    </li>
                    <li>
                        <img src={placeholder} />
                        <div className="membros__nome">
                            <span>João não matou o Cheske</span>
                            <small>Garoto de programa</small>
                        </div>
                        {children}
                    </li>
                    <li>
                        <img src={placeholder} />
                        <div className="membros__nome">
                            <span>João que mamou o Cheske</span>
                            <small>Garoto de programa</small>
                        </div>
                        {children}
                    </li>
                    <li>
                        <img src={placeholder} />
                        <div className="membros__nome">
                            <span>João que assasinou o Cheske</span>
                            <small>Garoto de programa</small>
                        </div>
                        {children}
                    </li>
                </ul>
            </div>
        </>
    )
}
