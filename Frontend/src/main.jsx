import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Herosection from './pages/user/Herosection.jsx'
import About from './pages/user/About.jsx'
import Contact from './pages/user/Contact.jsx'
import Login from './pages/user/Login.jsx'
import Register from './pages/user/Register.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Maindashboard from './pages/admin/Maindashboard.jsx'
import Addfood from './pages/admin/Addfood.jsx'
import Managefood from './pages/admin/Managefood.jsx'
import Foodcards from './pages/user/Foodcards.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<App />}>
        <Route index element={<Herosection />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/foods' element={<Foodcards />} />
      </Route>

      <Route path='/admin' element={<AdminLogin />}></Route>

      <Route path='/admindashboard' element={<Dashboard />} >
        <Route path='dashboard' element={<Maindashboard />} />
        <Route path='add-food' element={<Addfood />} />
        <Route path='manage-food' element={<Managefood />} />

      </Route>
    </>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
