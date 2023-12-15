import React, { useState } from 'react';

// Composant enfant
const ColorChangingBox = ({ isFilled }) => {
  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: isFilled ? 'green' : 'transparent',
    transition: 'background-color 0.5s ease-in-out',
  };

  return <div style={boxStyle}></div>;
};

// Composant formulaire
const MyForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Vérifier si les champs sont renseignés
  const isFilled = login !== '' && password !== '';

  return (
    <div>
      <form>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>

      {/* Composant enfant avec la couleur changeante */}
      <ColorChangingBox isFilled={isFilled} />
    </div>
  );
};

export default MyForm;
