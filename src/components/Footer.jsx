import React from 'react';
import LogoWithe from '../images/LogoWithe.svg';
import Facebook from '../images/Facebook.svg';
import Linkedin from '../images/Linkedin.svg';
import Instagram from '../images/Instagram.svg'

const Footer = () => {
    return(
        <div className="backfooter">
            <div className="footer">
                <div className="icons">
                    <img src={LogoWithe} alt="Logo"/>
                    <div className="redes">
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Linkedin} alt="Linkedin"/>
                        <img src={Instagram} alt="Instagram"/>
                    </div>
                </div>
                <div className="links">
                    <ul className="links">
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

            </div>
            <div className="divbottom">
                    <h3>Termos e Condições-Política de Privacidade</h3>
                </div>
        </div>

    );
}

export default Footer