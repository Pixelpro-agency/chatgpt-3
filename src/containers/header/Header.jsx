import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Costruiamo qualcosa di straordinario con GPT-3 OpenAI</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum mi in fringilla. Nulla ante mauris, bibendum</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="La tua email" />
        <button type="button">Iniziamo</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 persone hanno eseguito l'accesso nelle ultime 24 ore</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;