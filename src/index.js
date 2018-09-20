import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//API to help cache assets and other files for when user are offline or have a slow connection
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
