import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Richiedi subitol'accesso per iniziare</h4>
      <h1 className="gradient__text">Le possibilità vanno <br /> oltre la tua immaginazione</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque</p>
      <h4>Richiedi subitol'accesso per iniziare</h4>
    </div>
  </div>
);

export default Possibility;