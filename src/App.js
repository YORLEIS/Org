import { useState } from 'react';
import { v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(false)
  const [colaboradores, actualizarColaboradores] =useState([
    {
      id: uuid(),
      nombre:"Harland Lohora",
      puesto:"Instructor",
      foto:"https://github.com/harlandlohora.png",
      equipo:"Front End",
      fav:false
    },
    {
      id: uuid(),
      nombre:"Jean Marie",
      puesto:"Instructora",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      equipo:"Programación",
      fav:true
    },
    {
      id: uuid(),
      nombre:"Christian",
      puesto:"Instructor",
      foto:"https://github.com/christianpva.png",
      equipo:"Móvil",
      fav:true
    }
])
const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    id: uuid(),
    titulo: "DevOps",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  }
]);

  // Ternerario --> condicion ? seMuestra : noSeMuestra
  // operador cortocircuito: condicion && seMuestra
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador", colaborador);
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador=(id)=>{
    console.log("Eliminar colaborador", id);
    // Muestra todos los colaboradores que tenga el id diferente al que fue pasado
    const nuevosColaboradores = colaboradores.filter((colaborador)=>{
      return colaborador.id !== id
    })
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo=(nuevoEquipo)=>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  // manejar me gustas
  const like = (id) =>{
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        // es decir si es true se convierrte en false y viceversa
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
    <Header/>
    {/* si mostrarFormulario es true, muestra lo primero de lo contrario muestro los corchetes */}
    {/* {mostrarFormulario ?  <Formulario/>: <></>} */}
    {
      mostrarFormulario &&  <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}

    />}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    {
      equipos.map((equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
    }

    <Footer/>
    </div>
  );
}

export default App;
