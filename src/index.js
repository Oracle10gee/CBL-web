import React from 'react';
import ReactDOM from 'react-dom/client';
import 'lenis/dist/lenis.css';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';
import App from './App';
import { prefersReducedMotion } from './lib/gsap';
import reportWebVitals from './reportWebVitals';

// CSS only pre-hides animated elements when this class is present, so content
// stays visible for reduced-motion users and if scripts fail.
if (!prefersReducedMotion()) {
  document.documentElement.classList.add('motion');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
