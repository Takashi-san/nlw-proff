import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/19041776?s=460&u=47c862e0d6a921b06745cf94f02b7acfbbc899f9&v=4" alt="Bruno Takashi"/>
                <div>
                    <strong>Bruno Takashi</strong>
                    <span>Waifulogia</span>
                </div>
            </header>

            <p>
                Com objetivo de um dia ganhar dinheiro com waifus em video games, estou aumentando meu público alvo ensinando pessoas a se tornarem homens/mulheres de cultura.
                <br/><br/>
                Mais de 300.000 pessoas já se tornaram apreciadores dessa forma de arte.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;