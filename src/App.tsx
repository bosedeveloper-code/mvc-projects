import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import OpdDashboard from "./modules/opd/pages/OpdDashboard";
import IpdDashboard from './modules/ipd/pages/IpdDashboard'

function App() {
  // const [count, setCount] = useState(0)
  /*   return (
      <MainLayout>
        <OpdDashboard />
      </MainLayout >
    ); */

  /* return(      
    <Routes element={<MainLayout />}>
      <Route path='/' element="{<OpdDashboard />}"></Route>
      <Route path='/opd-dashboard' element="{<OpdDashboard />}"></Route>
    </Routes>
  ) */

  return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<OpdDashboard />} />
          <Route path="/opd-dashboard" element={<OpdDashboard />} />
          <Route path="/ipd-dashboard" element={<IpdDashboard />} />
        </Routes>
      </MainLayout>
  )
}

export default App
