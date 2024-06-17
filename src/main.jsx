import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Categories from './pages/Categories.jsx'
import Account from './pages/Account.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'


const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/categories',
        element: <Categories/>
      },
      {
        path: '/account',
        element: <Account/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
