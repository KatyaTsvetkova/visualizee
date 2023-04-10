import React from 'react';
import createRoot  from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

createRoot.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);