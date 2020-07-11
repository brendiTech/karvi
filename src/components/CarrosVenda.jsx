import React from 'react';

const CarrosVenda = () => {
    return(
        <div className="carrosvenda">
            <div className="novos">
                <h2>Carros novos à venda</h2>
                <ul>
                    <li><a href="">Jeep Wrangler 2020</a></li>
                    <li><a href="">Honda Accord 2020</a></li>
                    <li><a href="">Honda Civic 2020</a></li>
                    <li><a href="">Ford Explorer 2020</a></li>
                    <li><a href="">BMW 3 Series 2020</a></li>
                    <li><a href="">Dodge Challenger 2020</a></li>
                    <li><a href="">Mazda 3 2020</a></li>
                    <li><a href="">Toyota Camry 2020</a></li>
                    <li><a href="">Volkswagen Jetta 2020</a></li>
                </ul>
                <button className="btn-blue">Ver mais</button>
            </div>
            <div className="usados">
                <h2>Carros usados à venda</h2>
                <ul>
                    <li><a href="">Jeep Wrangler Usado</a></li>
                    <li><a href="">Honda Accord Usado</a></li>
                    <li><a href="">Honda Civic Usado</a></li>
                    <li><a href="">Ford Explorer Usado</a></li>
                    <li><a href="">BMW 3 Series Usado</a></li>
                    <li><a href="">Dodge Challenger Usado</a></li>
                    <li><a href="">Mazda 3 Usado</a></li>
                    <li><a href="">Toyota Camry Usado</a></li>
                    <li><a href="">Volkswagen Jetta Usado</a></li>
                </ul>
                <button className="btn-blue">Ver mais</button>
            </div>
        </div>
    );
}

export default CarrosVenda