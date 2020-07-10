import React from 'react';
import Heroimg from '../images/Heroimg.svg'

const Hero = () => {
    return(
        <div className="hero">
            <div className="texts">
                <h1>Compre de forma inteligente. Dirija mais feliz.</h1>
                <h3>Compare as ofertas de um estoque de mais de 100.000 carros novos e usados.</h3>
            </div>
            <div className="buttons">
                <button> Comprar carro novo </button>
                <button> Comprar carro usado </button>
            </div>
            <img src={Heroimg} alt=""/>
        </div>
    );
};

export default Hero