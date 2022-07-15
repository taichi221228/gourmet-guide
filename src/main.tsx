import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/reduce-motion.css';
import 'sanitize.css/system-ui.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/ui-monospace.css';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
