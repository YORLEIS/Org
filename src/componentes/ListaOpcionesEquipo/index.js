import "./ListaOpciones.css"
const ListaOpciones = (props) =>{

    // Metodo map -> arreglo.map( (equipo, index) =>{
    //  return <option></option>
    //})

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {/* este valor key: es necesario colocarlo porque react necesita un identificados unico */}
            { props.equipos.map((equipo, index) =><option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones