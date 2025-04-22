import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dientich_hcn from './Dientich_hcn.jsx'
// import App from './App.jsx'
// import Counter from './Counter.jsx'
import CounterFunction from './Counter_function.jsx'
import S_hcn from './S_hnc.jsx'
import State_getData './State_getData'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <S_hcn />
  </StrictMode>,
)
