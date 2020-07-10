import React from 'react';
import Usado from '../images/Usado.svg';

const CarroUsado = () => {
    return (
        <div className="usado">
            <img src={Usado} alt=""/>
            <div className="content">
                <h2>Escolha entre milhares de carros usados garantidos</h2>
                <p>Obtenha acesso à nossa extensa seleção de carros usados. Veja as imperfeições (se houver) e o status mecânico. Os carros são garantidos por três meses e, se você não gostar, tem 7 dias para devolvê-lo.</p>
                <button>Comprar carro usado</button>
            </div>
        </div>
    );
};

export default CarroUsado