import { Link } from 'react-router-dom'
import './Agradecimientos.css'
import Piramide from './Piramide'

const Agradecimientos = () => {
  return (
    <div className="Agradecimientos">
      <p>Su nivel de riesgo comparado con la población general</p>
      <div className="Agredecimientos__contenedor_piramide">
        <Piramide />
      </div>
      <Link className="Agradecimientos__boton" to="/inicio">Finalizar</Link>
    </div>
  )
}

export default Agradecimientos
