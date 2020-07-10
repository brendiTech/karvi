import React from 'react';
import Novo from '../images/Novo.svg';

const CarroNovo = () => {
    return(
        <div className="backcolor">
            <div className="novo">
                <img src={Novo} alt="car" className="ilustracion"/>
                <div className="content">
                    <h2>Compre seu carro novo de forma simples e sem surpresas</h2>
                    <p>Compare as ofertas em estoque de mais de 100.000 carros - sem custos ocultos. Basta entrar em contato com a concessionária preferida para discutir todos os detalhes e comprar diretamente.</p>
                    <button className="btn-blue">Comprar carro novo</button>
                </div>
            </div>
        </div>
    );
};

export default CarroNovo