import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Cosa è GPT-3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum mi in fringilla. Nulla ante mauris, bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Le possibilità vanno oltre la tua immaginazione</h1>
      <p>Esplora la Libreria</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum" />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum" />
      <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum" />
    </div>
  </div>
);

export default WhatGPT3;