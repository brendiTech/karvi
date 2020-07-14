import React from 'react';
import Heroimg from '../images/Heroimg.svg'

const Hero = () => {
    return(
        <section className="hero">
            <div className="content">
                <div className="texts">
                    <h1>Compre de forma inteligente. <br></br>Dirija mais feliz.</h1>
                    <h3>Compare as ofertas de um estoque de mais de 100.000 carros novos e usados.</h3>
                </div>
                <div className="buttons">
                    <button className="btn-blue">Comprar carro novo</button>
                    <button className="btn-white">Comprar carro usado</button>
                </div>
            </div>
            <img src={Heroimg} alt="dibujo" className="ilustracion"/>
        </section>
    );
};

export default Hero