import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routers/Router.jsx'

import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
