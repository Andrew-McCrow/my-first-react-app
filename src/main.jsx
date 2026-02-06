import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { App2, App3 } from './components/App2.jsx'
import Greeting from './components/Greeting.jsx'
import Gallery from './components/Gallery.jsx'
import App4 from './components/App4.jsx'
import Cart from './components/Cart.jsx'
import Person from './components/Person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
