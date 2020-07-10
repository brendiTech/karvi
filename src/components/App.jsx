import React, {Component} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CarroNovo from './CarroNovo';
import CarroUsado from './CarroUsado';
import VerificarPrec from './VerificarPrec';
import Information from './Information';
import MaisBuscados from './MaisBuscados';
import EncontreMarca from './EncontreMarca';
import EncontreTipo from './EncontreTipo'
import CarrosVenda from './CarrosVenda';
import CarrosPrecios from './CarrosPrecios';
import Footer from './Footer';
import '../css/hero.css'

class App extends Component {

  render(){
    return (
      <div className="App container">
        <Navbar/>
        <Hero/>
        <CarroNovo/>
        <CarroUsado/>
        <VerificarPrec/>
        <Information/>
        <MaisBuscados/>
        <EncontreMarca/>
        <EncontreTipo/>
        <CarrosVenda/>
        <CarrosPrecios/>
        <Footer/>
      </div>
    )
  }
}

export default App;