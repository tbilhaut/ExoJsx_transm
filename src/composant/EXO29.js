import React from 'react';

const LoginComponent = () => {
  // Stockage dans deux variables distinctes
  const usernameVar = 'theo';
  const passwordVar = '1234';

  // Stockage dans un objet avec des propriétés distinctes
  const userCredentialsObj = {
    login: 'Theo',
    mdp: '123',
  };

  return (
    <div>
      {/* Affichage pour les variables distinctes */}
      <div>
        <h2>Composant avec Variables Distinctes</h2>
        <label>Login:</label>
        <input type="text" value={usernameVar} readOnly />
        <br />
        <label>Mot de passe:</label>
        <input type="password" value={passwordVar} readOnly />
      </div>

      {/* Affichage pour l'objet avec des propriétés distinctes */}
      <div>
        <h2>Composant avec Objet</h2>
        <label>Login:</label>
        <input type="text" value={userCredentialsObj.login} readOnly />
        <br />
        <label>Mot de passe:</label>
        <input type="password" value={userCredentialsObj.mdp} readOnly />
      </div>
    </div>
  );
};

export default LoginComponent;
