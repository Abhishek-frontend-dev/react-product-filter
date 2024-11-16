import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import './index.css'; // If you have a global CSS file
import App from './App'; // Path to your App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
