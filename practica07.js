const formulario = document.getElementById("formulario")
const miFieldset = (legend, Nombre, CorreoElectrónico) => {
    return `
    <fieldset>${legend}</legend
            <legend>Información Personal</legend>
            <label for=${Nombre}>${Nombre}:</label>
            <input type="text" id=${Nombre}>
            <label for=${CorreoElectrónico}>${CorreoElectrónico}:</label>
            <input type="text" id=${CorreoElectrónico}>
        </fieldset>
    `
}
formulario.innerHTML = miFieldset("informacion personal", "Nombre", "Correo")
formulario.innerHTML += miFieldset("informacion direccion", "Direccion", "Ciudad")