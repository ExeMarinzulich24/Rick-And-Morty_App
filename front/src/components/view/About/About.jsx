import React from 'react'
import './About.css'


export default function About() {
  return (
    <>
      <div className='About-Div'>
        <div className='About-Information'>
          <div className='About-Image'><img src={require('../../../assets/images/yo.jpg')}/></div>
          <label>Exequiel Marinzulich</label>
          <label>Soy Argentino de la Ciudad Autonoma de Bs.As, estudiante de ingenieria en sistemas de 3er año de la Universidad Tecnologica Nacional (UTN), me desempeño mayormente en el frontend.</label>
        </div>

      </div>
    </>
  )
}



