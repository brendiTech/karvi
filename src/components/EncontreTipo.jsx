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
        <div className="backcolor">
            <div className="encontretipo">
                <h2>Encontre o carro por Tipo</h2>
                <div className="images">
                    <div className="container-tipo">
                        <img src={Convertibles} alt="Convertibles"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Coupes} alt="Coupes"/>
                    </div>
                    <div className="container-tipo">
                        <img src={SUV} alt="SUV"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Sedan} alt="Sedan"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Pickup} alt="Pickup"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Utilitario} alt="Utilitario"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Hatchback} alt="Hatchback"/>
                    </div>
                    <div className="container-tipo">
                        <img src={Electrico} alt="Electrico"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EncontreTipo