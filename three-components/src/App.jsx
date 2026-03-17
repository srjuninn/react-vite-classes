import React from 'react'
import ButtonModule from './components/ButtonModule'
import Card from './components/CardStyled'
import ohNeymar from './assets/ohNeymar.jpeg'
import Footer from './components/Footer'

export default function App() {
  return (
    <React.Fragment>
      <ButtonModule text={"muchas gracias afliciones.. isso é para vosotos..... SIIIIIIIIIIUUUUUUU"}></ButtonModule>
      <Card 
      title={"ney driblando"}
      src={ohNeymar}
      description={"neymar jogando muito e destruindo na copa"}
      text={"oh neymar... ohoh neymar"}></Card>
      <Footer copiright={"srjuninn"} github={"https://github.com/srjuninn"}></Footer>
    </React.Fragment>
  )
}