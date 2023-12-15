import React, { useState } from 'react';

const LoginForm = () => {
  // État pour stocker les valeurs du login et du mot de passe
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // État pour gérer la couleur du formulaire
  const [formColor, setFormColor] = useState('white');

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si le mot de passe est correct (1234)
    if (password === '1234') {
      // Si correct, le fond reste blanc
      setFormColor('white');
    } else {
      // Si incorrect, le fond devient rouge
      setFormColor('red');
    }
  };

  return (
    <div style={{ backgroundColor: formColor, padding: '20px', width: '300px', margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
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
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
