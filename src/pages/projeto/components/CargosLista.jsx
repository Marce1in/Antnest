import CargosInstancia from "./CargosInstancia";
import CargosRemover from "./CargosRemover";
import "./CargosLista.css"

export default function CargosLista(){
    return (
        <>
            <div className="cargos">
                <ul className="cargos__lista">
                    <CargosInstancia>
                        <CargosRemover />
                    </CargosInstancia>
                    <CargosInstancia>
                        <CargosRemover />
                    </CargosInstancia>
                    <CargosInstancia>
                        <CargosRemover />
                    </CargosInstancia>
                </ul>
            </div>
            <button className='cargos__criar'>Criar</button>
        </>
    )
}
