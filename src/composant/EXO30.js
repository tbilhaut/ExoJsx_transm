// EXO30.js
import React from 'react';

// Composant avec une opération ternaire
const TernaryComponent = ({ condition, vrai, faux }) => (
  <div>
    {condition ? vrai : faux}
  </div>
);

// Composant avec un mapping
const MappingComponent = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Composant principal EXO30
const EXO30 = () => {
  const condition = true;
  const vraiContent = <p>Vrai</p>;
  const fauxContent = <p>Faux</p>;

  const items = ['Théo', 'Jean', 'png'];

  return (
    <div>
      {/* Utilisation du composant avec opération ternaire */}
      <TernaryComponent condition={condition} vrai={vraiContent} faux={fauxContent} />

      {/* Utilisation du composant avec mapping */}
      <MappingComponent items={items} />
    </div>
  );
};

export default EXO30;
