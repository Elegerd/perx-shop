// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const reactApp = {
  start: function ({ dealerIds }: { dealerIds: string[] }) {
    const root = document.getElementById('root');
    ReactDOM.render(
      <React.StrictMode>
        <App dealerIds={dealerIds} />
      </React.StrictMode>,
      root,
    );
  },
};

window.app = reactApp;
