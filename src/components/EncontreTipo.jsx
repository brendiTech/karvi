import React from 'react';
import Convertibles from '../images/typescar/Convertibles.svg';
import Coupes from '../images/typescar/Coupes.svg';
import SUV from '../images/typescar/SUV.svg';
import Sedan from '../images/typescar/Sedan.svg';
import Pickup from '../images/typescar/Pickup.svg';
import Utilitario from '../images/typescar/Utilitario.svg';
import Hatchback from '../images/typescar/Hatchback.svg';
import Electrico from '../images/typescar/Electrico.svg';
const EncontreTipo = () => {
    return(
        <div className="encontretipo">
            <h2>Encontre o carro por Tipo</h2>
            <div className="images">
                <img src={Convertibles} alt="Convertibles"/>
                <img src={Coupes} alt="Coupes"/>
                <img src={SUV} alt="SUV"/>
                <img src={Sedan} alt="Sedan"/>
                <img src={Pickup} alt="Pickup"/>
                <img src={Utilitario} alt="Utilitario"/>
                <img src={Hatchback} alt="Hatchback"/>
                <img src={Electrico} alt="Electrico"/>
            </div>
        </div>
    );
}

export default EncontreTipo