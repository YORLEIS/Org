import "./Colaborador.css"
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa6";


const Colaborador = (props) =>{
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like}= props
    return <div className="colaborador">
    <IoCloseCircleSharp className="eliminar" onClick={()=>eliminarColaborador(id)} />
       <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" onClick={()=>like(id)}/>: <FaRegHeart onClick={()=>like(id)} />}
            
            
           

        </div>
    </div>
}

export default Colaborador;