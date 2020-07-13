import React from 'react';
import HyundaiCar from '../images/HyundaiCar.png';
import JeepCar from '../images/JeepCar.png';
import FiatCar from '../images/FiatCar.png';
import '../css/slider.css'

function Slider(){
    return(
        <div id="slider">
            <input type="radio" name="slider" id="slide1" defaultChecked/>
            <input type="radio" name="slider" id="slide2"/>
            <input type="radio" name="slider" id="slide3"/>
            <input type="radio" name="slider" id="slide4"/>
            <div id="slides">
                <div id="overflow">
                    <div className="inner">
                        <div className="slide slide_1">
                            <div className="slide-content">
                                <img src={HyundaiCar} alt="HyundaiCar" className="foto carousel__item"/>
                                <div className="description">
                                    <h4>Hyundai iX35</h4>
                                    <p>2020/2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide_2">
                        <div className="slide-content">
                                <img src={JeepCar} alt="JeepCar" className="foto carousel__item"/>
                                <div className="description">
                                    <h4>Jeep Wrangler</h4>
                                    <p>2020/2021</p>
                                </div>
                        </div>
                        </div>
                        <div className="slide slide_3">
                        <div className="slide-content">
                        <img src={FiatCar} alt="FiatCar" className="foto carousel__item"/>
                            <div className="description">
                                <h4>Fiat Argo</h4>
                                <p>2020/2021</p> 
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="controls">
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>
                <label htmlFor="slide4"></label>
            </div>
        </div>

    );
}

export default Slider