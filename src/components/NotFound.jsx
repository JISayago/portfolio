import React from 'react'
import Error404 from './Error404'

export default function NotFound() {
     const mensaje = "No se encontraron proyectos con la tecnología solicitada!"
    return (
        <Error404 props={ mensaje} />
  )
}
