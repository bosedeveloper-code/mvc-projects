import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import userRoutes from "./modules/user/routes";
import opdRoutes from "./modules/opd/routes";
import ipdRoutes from "./modules/ipd/routes";

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

  /* return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<OpdDashboard />} />
          <Route path="/opd-dashboard" element={<OpdDashboard />} />
          <Route path="/ipd-dashboard" element={<IpdDashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </MainLayout>
  ) */

  return (
    <Routes>
      {/* Public */}
      {userRoutes.public.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}

      {/* Protected */}
      <Route element={<MainLayout />}>
        {userRoutes.protected.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

        {opdRoutes.protected.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

        {ipdRoutes.protected.map((route) => (
          < Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

      </Route>
    </Routes>
  )
}

export default App
