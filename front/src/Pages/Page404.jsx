import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <main className="page404Wrapper" >
        <p className="page404Big">404 <br></br> <span id='nf'>not found</span></p>
        <p className="page404Oups">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/"><p className="page404Home" >Accueil</p></Link>
    </main>
  )
}