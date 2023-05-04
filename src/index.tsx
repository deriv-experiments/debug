import React from 'react';
import ReactDOM from 'react-dom/client';

import Deriv, { useAuthorize, useDebug } from '@deriv-experiments/react'

const StatementPage = () => {
  const authorize = useAuthorize();

  const debug = useDebug();

  return (
    <div>
      <h1>Debug</h1>

      {authorize
        ? (
          <>
            Logged in as {' '}
            <strong>{authorize.email}</strong>
          </> 
        )
        : (
          <button onClick={Deriv.login}>Login</button>
        )
      }

      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/app-manager/">Apps</a></li>
        <li><a href="/reports/">Reports</a></li>
        <li>Debug</li>
      </ul>

      <h2>WebSocket Log</h2>
      <ul>
        {debug?.map((entry, index) => {
          return (
            <li key={index}>
              <strong>
                {entry[0]}
              </strong>
              <br />
              <pre><code>{JSON.stringify(entry[1], null, 2)}</code></pre>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <StatementPage />
);
