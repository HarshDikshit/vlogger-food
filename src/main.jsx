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
import Cart from './pages/Cart.jsx'
import SignIn from './pages/SignIn.jsx'
import Temporary from './pages/Temporary.jsx'


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
        path: '/categories/:categories',
        element: <Categories/>
      },
      {
        path: '/account',
        element: <Account/>
      },
      {
        path: '/add',
        element: <About/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/temporary',
        element:<Temporary/>
      },
      {
        path: '/arpit',
        element:<Temporary/>
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
