import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the mount node from Webflow embed
const mountNode = document.getElementById('veralumeReportWidget');

if (mountNode) {
  ReactDOM.createRoot(mountNode).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
