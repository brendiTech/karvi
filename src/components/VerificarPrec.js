import React from 'react';
import Verificar from '../images/Verificar.svg';

const VerificarPrec = () => {
    return(
        <section className="backcolor">
            <div className="verificar">
                <img src={Verificar} alt="dibujo" className="ilustracion"/>
                <div className="content">
                    <h2>Obtenha uma oferta de troca que você pode usar imediatamente</h2>
                    <p>Obtenha uma oferta de troca que você pode usar imediatamente. <br></br>Responda a algumas perguntas para ver o valor de mercado do seu carro e obter uma oferta de troca imediata, sem sair da sua casa.</p>
                    <button className="btn-blue">Verificar preç</button>
                </div>
            </div>
        </section>
    );
};

export default VerificarPrec