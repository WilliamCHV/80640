//import MiFieldSet from "./MiFieldSet"
import DatosEscolare from "./DatosEscolares"
import DatosPersonales from "./DatosPersonales"

function Formulario() {
    return (
        <>
            <form action="">
                {/* <MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Password"/>
                <MiFieldSet titulo="Datos Personales" txt1="Carrera" txt2="Semestre"/> */}
                
                <DatosPersonales></DatosPersonales>
                <DatosEscolare></DatosEscolare>
                <input type="submit" value="Enviar Datos"/>
            </form>
        </>
    )
}

export default Formulario