import React from 'react';
import HyundaiCar from '../images/HyundaiCar.png';
import JeepCar from '../images/JeepCar.png';
import FiatCar from '../images/FiatCar.png';
import Right from '../images/Right.svg';
import Left from '../images/Left.svg';

const Hyundai = <div>
					<img src={HyundaiCar} alt="HyundaiCar" className="foto carousel__item"/>
					<h4>Hyundai iX35</h4>
					<p>2020/2021</p>
				</div>
const Jeep = <div>
				<img src={JeepCar} alt="JeepCar" className="foto carousel__item"/>
				<h4>Jeep wrangler</h4>
				<p>2020/2021</p> 
			</div>
const Fiat = <div>
				<img src={FiatCar} alt="FiatCar" className="foto carousel__item"/>
				<h4>Fiat Argo</h4>
				<p>2020/2021</p> 
			</div>

const imgUrls = [
    Hyundai,
    Jeep,
    Fiat
];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
                <div onClick={ this.previousSlide } className="divflecha left">
                    <img src={Left} alt="arrowleft" className="flecha " />
                </div>
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                <div onClick={ this.nextSlide } className="divflecha right">
                    <img src={Right} alt="arrowright" className="flecha  "/>
                </div>
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {

	console.log(url)
	return (url);
}

export default Carousel
