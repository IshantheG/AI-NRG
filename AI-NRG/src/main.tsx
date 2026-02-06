import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './components/Homepage.tsx';
import DataPage from './components/Datapage.tsx';

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />
  }, 
  
  {
  path: "/data",
  element: <DataPage/>
  }, 
  

])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
