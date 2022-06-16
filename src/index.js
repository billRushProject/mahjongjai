/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 01/06/2022 - 17:26:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/06/2022
    * - Author          : LKY
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import Helmet from 'react-helmet';

import App from './App';

import './css/colorCode.css';
import './css/layout.css';
import './css/form.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <img src={require('./img/icon02.jpeg')} className='icon'></img>
    <Helmet>
        <title>mahjongjai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <App/>
  </>
);
