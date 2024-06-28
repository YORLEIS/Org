import {useState} from "react"
import "./MiOrg.css"
// DEFINIMOS ESTADO PARA EL BOTON DE IMAGEN PARA OCULTAR O NO EL FORMULARIO
const MiOrg = (props) =>{
    // Estado- hooks
    //useState
    //useState()
    console.log(props);
    // const[nombreVariable, funcionActualizada]= useState("valorIncial")
 // const [mostrar, actualizaMostrar] = useState(true);

    // const manejarClic= () =>{
    //     console.log("Mostrar/ocultar elemento", mostrar);
    //     actualizaMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;