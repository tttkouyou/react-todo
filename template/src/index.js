import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from "emotion";
import reset from "react-style-reset";
import { App } from './app/App';
import * as serviceWorker from './serviceWorker';

injectGlobal(reset, {
  
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
