import React from 'react';
import Honda from '../images/logoscar/Honda.png';
import Peugeot from '../images/logoscar/Peugeot.png';
import Ford from '../images/logoscar/Ford.png';
import Citroen from '../images/logoscar/Citroen.png';
import Renault from '../images/logoscar/Renault.png';
import Jeep from '../images/logoscar/Jeep.png';
import Nissan from '../images/logoscar/Nissan.png';
import Hyundai from '../images/logoscar/Hyundai.png';
import Chevrolet from '../images/logoscar/Chevrolet.png';
import Fiat from '../images/logoscar/Fiat.png';
import Toyota from '../images/logoscar/Toyota.png';
import Volkswagen from '../images/logoscar/Volkswagen.png';
import CAOA from '../images/logoscar/CAOA.png'


const EncontreMarca = () => {
    return( 
        <div className="encontremarca">
            <h2>Encontre o carro por Marca</h2>
            <img src={Honda} alt="Honda"/>
            <img src={Peugeot} alt="Peugeot"/>
            <img src={Ford} alt="Ford"/>
            <img src={Citroen} alt="Citroen"/>
            <img src={Renault} alt="Renault"/>
            <img src={Jeep} alt="Jeep"/>
            <img src={Nissan} alt="Nissan"/>
            <img src={Hyundai} alt="Gyundai"/>
            <img src={Chevrolet} alt="Chevrolet"/>
            <img src={Fiat} alt="Fiat"/>
            <img src={Toyota} alt="Toyota"/>
            <img src={Volkswagen} alt="Volkswagen"/>
            <img src={CAOA} alt="CAOA Chery"/>
        </div> 

    );
}

export default EncontreMarca