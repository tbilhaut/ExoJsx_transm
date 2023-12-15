import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionalComponent from './composant/FunctionalComponent';
import LoginComponent from './composant/EXO29';
import EXO30 from './composant/EXO30';
import LoginForm from './composant/EXO31';
import EXO32 from './composant/EXO32'; // Import EXO32
import EXO33 from './composant/EXO33'; // Import EXO33

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FunctionalComponent couleur={'yellow'} />
    <LoginComponent />
    <EXO30 />
    <LoginForm />
    <EXO32 /> {/* Render the EXO32 component */}
    <EXO33 /> {/* Render the EXO33 component */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
