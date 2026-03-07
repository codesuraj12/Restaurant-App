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




const router = createBrowserRouter(
    createRoutesFromElements(
      <>
   <Route path='/login' element = {<Login/>}/>
   <Route path='/register' element = {<Register/>}/>
      <Route path='/' element ={<App/>}>
        <Route index element = {<Herosection/>}></Route>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
       
    </Route>

    <Route path='/admin' element={<AdminLogin/>}>

    </Route>
       </>
    )
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
