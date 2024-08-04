import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import { robots } from './robots.js';
import App from './continars/App.js';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<App robots={robots}/>

  </>
);

