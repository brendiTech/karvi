import React from 'react';

const CarrosVenda = () => {
    return(
        <div className="carrosvenda">
            <div className="novos">
                <h2>Carros novos à venda</h2>
                <ul>
                    <li>Jeep Wrangler 2020</li>
                    <li>Honda Accord 2020</li>
                    <li>Honda Civic 2020</li>
                    <li>Ford Explorer 2020</li>
                    <li>BMW 3 Series 2020</li>
                    <li>Dodge Challenger 2020</li>
                    <li>Mazda 3 2020</li>
                    <li>Toyota Camry 2020</li>
                    <li>Volkswagen Jetta 2020</li>
                    <li>Volkswagen Jetta 2020</li>
                </ul>
                <button className="btn-blue">Ver mais</button>
            </div>
            <div className="usados">
                <h2>Carros usados à venda</h2>
                <ul>
                    <li>Jeep Wrangler Usado</li>
                    <li>Honda Accord Usado</li>
                    <li>Honda Civic Usado</li>
                    <li>Ford Explorer Usado</li>
                    <li>BMW 3 Series Usado</li>
                    <li>Dodge Challenger Usado</li>
                    <li>Mazda 3 Usado</li>
                    <li>Toyota Camry Usado</li>
                    <li>Volkswagen Jetta Usado</li>
                    <li>Volkswagen Jetta Usado</li>
                </ul>
                <button className="btn-blue">Ver mais</button>
            </div>
        </div>
    );
}

export default CarrosVenda