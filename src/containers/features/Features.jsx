import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare neque ut elit pellentesque egestas. Nam vulputate elementum',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Il futuro è adesso e devi solo rendertene conto. Entra nel futuro oggi e fa in modo che succeda.</h1>
      <p>Richiedi subitol'accesso per iniziare</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;