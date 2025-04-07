
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';


{ /*
  The App structure
  ******************************
  index.html  
  //this is where the root element where the app is rendered from, again from here main.jsx is called / referenced

  src/main.jsx
  // this is where the entire app is routed from, our router provider is put here and routes from router.jsx called from

  /src/components/router.jsx
  This is where routes are configured, it has createBrowserApp to create dynamic and powrful routes, <App /> from src/App.jsx is
  called from here

  /src/App.jsx
  App.jsx, this is where <App /> is located, <App /> acts like a parent/container to all other componets
  which run from inside / nested in it,it also provides common functionaliity like <Navbar /> and <Footer /> common
  to all components 

  */ }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
