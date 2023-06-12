import React from 'react'
import Error404 from '../components/Error404';

function NotFound() {

  const mensaje = "Error 404. Página no Encontrada..."
  return (
    <Error404 props = {mensaje} />
  )
}
export default NotFound;