
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Contactus from './Components/Contactus/Contactus.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
    <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Contactus' element={<Contactus />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />

  </Route>
)
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}>
      
    </RouterProvider>
  
)
