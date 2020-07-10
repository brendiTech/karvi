import React from 'react';
import LogoWithe from '../images/LogoWithe.svg';
import Facebook from '../images/Facebook.svg';
import Linkedin from '../images/Linkedin.svg';
import Instagram from '../images/Instagram.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className="icons">
                <img src={LogoWithe} alt="Logo"/>
                <img src={Facebook} alt="Facebook"/>
                <img src={Linkedin} alt="Linkedin"/>
                <img src={Instagram} alt="Instagram"/>
            </div>
            <div className="links">
                <ul>
                    <li>Carros Novos</li>
                    <li>Carros Usados</li>
                    <li>Super ofertas</li>
                    <li>Cite meu usado</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="cliente">
                <h3>Atendimento ao Cliente</h3>
                <ul>
                    <li>Seg - Sex 08:00 - 17:00</li>
                    <li>+55 (11) 5242-0686</li>
                    <li>ola@karvi.com</li>
                </ul>
            </div>
            <div className="cons">
                <h3>Atendimento às concessionárias</h3>
                <ul>
                    <li>concessionarias@karvi.com</li>
                </ul>
            </div>
            <div className="divbottom">
                <h2>Termos e Condições-Política de Privacidade</h2>
            </div>
        </div>

    );
}

export default Footer