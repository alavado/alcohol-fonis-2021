import React from 'react'
import { Route, Switch } from 'react-router'
import NuevoRegistro from './NuevoRegistro'
import SeleccionPaciente from './SeleccionPaciente'

const Registro = () => {
  return (
    <div className="Registro">
      <Switch>
        <Route path="/registro/nuevo">
          <NuevoRegistro />
        </Route>
        <Route path="/registro">
          <SeleccionPaciente />
        </Route>
      </Switch>
    </div>
  )
}

export default Registro
