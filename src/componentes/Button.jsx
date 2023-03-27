import { Cookie } from '../componentes/Cookie'
import cookie from "../utils/cookie.json"
import getRandomArray from '../utils/getRandomArray'
import getRandomBackground from '../utils/getRandomBackground'
import background1 from '../assets/images/fondo1.png'
import background2 from '../assets/images/fondo2.png'
import background3 from '../assets/images/fondo3.png'
import background4 from '../assets/images/fondo4.png'
import { useState } from 'react'


export const Button = () => {

  const allBackgrounds = [background1, background2, background3, background4]

  let html = []
  for (const iterator of cookie) {
    html.push(iterator.phrase)
  }

  const [phrases, setphrases] = useState("¿QUE SERA?")

  const [background, setbackground] = useState(background1)


  const cambibar = () => {
    setphrases(getRandomArray(html))
    setbackground(getRandomBackground(allBackgrounds))
  }

  return (
    <div className='content__body' style={{ backgroundImage: `url(${background})` }}>
      <div className='content__all'>
        <h1>GALLETAS DE LA SUERTE</h1> 
        <div className='button'>
          <button onClick={cambibar}>Probar mi suerte</button>
        </div>
        <Cookie phrase={phrases} />
      </div>

    </div>

  )
}
