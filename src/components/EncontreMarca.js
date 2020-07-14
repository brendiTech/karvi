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
        <section className="encontremarca">
            <h2>Encontre o carro por Marca</h2>
            <div className="container-mayor">
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Honda} alt="Honda"/>
                    </div>
                    <p>Honda</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Peugeot} alt="Peugeot"/>
                    </div>
                    <p>Peugeot</p> 
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Ford} alt="Ford"/>
                    </div>
                    <p>Ford</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Citroen} alt="Citroen"/>
                    </div>
                    <p>Citroen</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Renault} alt="Renault"/>                      
                    </div>
                    <p>Renault</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Jeep} alt="Jeep"/>
                    </div>
                    <p>Jeep</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Nissan} alt="Nissan"/>
                    </div>
                    <p>Nissan</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Hyundai} alt="Hyundai"/>
                    </div>
                    <p>Hyundai</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Chevrolet} alt="Chevrolet"/>
                    </div>
                    <p>Chevrolet</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Fiat} alt="Fiat"/>
                    </div>
                    <p>Fiat</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Toyota} alt="Toyota"/>
                    </div>
                    <p>Toyota</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={Volkswagen} alt="Volkswagen"/>
                    </div>
                    <p>Volkswagen</p>
                </div>
                <div className="cuadricula">
                    <div className="container-logo">
                        <img src={CAOA} alt="CAOA Chery"/>
                    </div>
                    <p>CAOA Chery</p>
                </div>
            </div>
        </section> 

    );
}

export default EncontreMarca