  
import React, { useState } from 'react'


export const Sesion = ({ handleSubmited,handleStars}) => {

   const [usuario, setUsuario] = useState('')

   let jugador ={};
   
   const [estrella, setEstrella] = useState(0)

   const handleSubmit = (e) => {
       e.preventDefault()
       jugador.usuario=usuario
       jugador.puntuacion=0
       handleSubmited(jugador)
       handleStars(estrella)
   }
   return (
       <div className="sesion">
           <center>
           <form onSubmit={handleSubmit}>
               <h1 className="h1">Ingrese su usuario</h1>
               <input
               className="input"
                 id=""
                 label="Ingrese usuario"
                 value ={usuario}
                 onChange = {e => setUsuario(e.target.value)}
                 required
               />
               <h1 className="h1">Ingrese el numero de estrellas</h1>
                 <input
                 id=""
                 className="input"
                 label=""
                 value ={estrella}
                 onChange = {e => setEstrella(e.target.value)}
                 required
               /><br/>
               <br/>
                <button className="button">Ingresar</button>
               
           </form>
           </center>

          
       </div>
   )
} 