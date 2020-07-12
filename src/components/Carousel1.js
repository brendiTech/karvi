import React from 'react';
import HyundaiCar from '../images/HyundaiCar.png';
import JeepCar from '../images/JeepCar.png';
import FiatCar from '../images/FiatCar.png';
import Right from '../images/Right.svg';
import Left from '../images/Left.svg';
import '../css/slider.css'



function Carousel(){
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
                                <h4>Hyundai iX35</h4>
                                <p>2020/2021</p>
                            </div>
                        </div>
                        <div className="slide slide_2">
                        <div className="slide-content">
                                <img src={JeepCar} alt="JeepCar" className="foto carousel__item"/>
                                <h4>Jeep wrangler</h4>
                                <p>2020/2021</p>
                        </div>
                        </div>
                        <div className="slide slide_3">
                        <div className="slide-content">
                        <img src={FiatCar} alt="FiatCar" className="foto carousel__item"/>
                                <h4>Fiat Argo</h4>
                                <p>2020/2021</p> 
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
   {/* <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div> */}
</div>

    );
}

// class Carousel extends React.Component {

// render() {
//     const carouselSlide = document.querySelector('.carousel-slide');
//     const carouselImages = document.querySelectorAll('.carousel-slide .foto');
    
//     //Butons
//     const prevBtn = document.querySelector('#prevBtn');
//     const nextBtn = document.querySelector('#nextBtn');
    
//     //counter 
//     let counter = 1;
//     const size = window.innerWidth//carouselImages[0].getBoundingClientRect().width
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) +' px)';
//     //Button Listeners
//     nextBtn.addEventListener('click', () => {
//         carouselSlide.style.transition = "transform 0.4s ease-in-out";
//         counter++;
//     });
//     prevBtn.addEventListener('click', () => {
//         carouselSlide.style.transition = "transform 0.4s ease-in-out";
//         counter --;
//         carouselSlide.style.transform = 'translateX(' + (- size * counter) +' px)';
//     });
    
//     carouselSlide.addEventListener('transitioned', () => {
//         if(carouselImages[counter].id === 'lastClone') {
//             carouselSlide.style.transition = "none";
//             counter = carouselImages.length - 2;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         }
//         if(carouselImages[counter].id === 'firstClone') {
//             carouselSlide.style.transition = "none";
//             counter = carouselImages.length - counter;
//             carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//         }
//     })
    
//     return(
//         <div className="carousel-container">
//         <div className="carousel-slide">
//             <div id="prevBtn"className="divflecha left">
//                 <img src={Left} alt="arrowleft" className="flecha " />
//             </div>
//             <div>
//                 <img src={FiatCar} alt="FiatCar" className="foto carousel__item" id="lastClone"/>
//                 <h4>Fiat Argo</h4>
//                 <p>2020/2021</p> 
//             </div>
//             <div>
//                 <img src={HyundaiCar} alt="HyundaiCar" className="foto carousel__item"/>
//                 <h4>Hyundai iX35</h4>
//                 <p>2020/2021</p>
//             </div>
//             <div>
//                 <img src={JeepCar} alt="JeepCar" className="foto carousel__item"/>
//                 <h4>Jeep wrangler</h4>
//                 <p>2020/2021</p> 
//             </div>
//             <div>
//                 <img src={FiatCar} alt="FiatCar" className="foto carousel__item"/>
//                 <h4>Fiat Argo</h4>
//                 <p>2020/2021</p> 
//             </div>
//             <div>
//                 <img src={HyundaiCar} alt="HyundaiCar" className="foto carousel__item" id="firstClone"/>
//                 <h4>Hyundai iX35</h4>
//                 <p>2020/2021</p>
//             </div>
//             <div id="nextBtn"className="divflecha right">
//                 <img src={Right} alt="arrowright" className="flecha  "/>
//             </div>
//         </div>
//     </div>
//     )
// };
// }

export default Carousel