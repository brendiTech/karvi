import React from 'react';
import HyundaiCar from '../images/HyundaiCar.png';
import JeepCar from '../images/JeepCar.png';
import FiatCar from '../images/FiatCar.png';

const MaisBuscados = () => {
    return(
        <div className="maisbuscados">
            <h2>Carros novos mais buscados</h2>
            <img src={HyundaiCar} alt="HyundaiCar"/>
            <img src={JeepCar} alt="JeepCar"/> 
            <img src={FiatCar} alt="FiatCar "/>
        </div>
    );  
} 
 
export default MaisBuscados