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
            <div className="container-mayor">
                <div className="container-logo">
                    <img src={Honda} alt="Honda"/>
                </div>
                <div className="container-logo">
                    <img src={Peugeot} alt="Peugeot"/>  
                </div>
                <div className="container-logo">
                    <img src={Ford} alt="Ford"/>
                </div>
                <div className="container-logo">
                    <img src={Citroen} alt="Citroen"/>
                </div>
                <div className="container-logo">
                    <img src={Renault} alt="Renault"/>
                </div>
                <div className="container-logo">
                    <img src={Jeep} alt="Jeep"/>
                </div>
                <div className="container-logo">
                    <img src={Nissan} alt="Nissan"/>
                </div>
                <div className="container-logo">
                <img src={Hyundai} alt="Hyundai"/>
                </div>
                <div className="container-logo">
                    <img src={Chevrolet} alt="Chevrolet"/>
                </div>
                <div className="container-logo">
                    <img src={Fiat} alt="Fiat"/>
                </div>
                <div className="container-logo">
                    <img src={Toyota} alt="Toyota"/>
                </div>
                <div className="container-logo">
                    <img src={Volkswagen} alt="Volkswagen"/>
                </div>
                <div className="container-logo">
                    <img src={CAOA} alt="CAOA Chery"/>
                </div>
            </div>
        </div> 

    );
}

export default EncontreMarca