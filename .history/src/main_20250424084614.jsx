import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dientich_hcn from './Dientich_hcn.jsx'
// import App from './App.jsx'
// import Counter from './Counter.jsx'
import CounterFunction from './Counter_function.jsx'
import S_hcn from './S_hnc.jsx'
import State_getData1 from './State_getData.jsx'
import FGetdtAPI from './FGetdtAPI.jsx'
import CGetdtAPI from './CGetdtAPI.jsx'
import CaxiosAPI from './axios/CaxiosAPI.jsx'
import FuaxiosA

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaxiosAPI />
  </StrictMode>,
)
