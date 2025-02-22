import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Home, About, Contact, User, Github, githubInfoLoader } from './components'

// it can be a little complex
// const router = createBrowserRouter([
//   // list of all objects which we need, RouteObject[]
//   {
//     path: '/', //  '/' is a top level element, all the nesting is inside it
//     element: <Layout />, // what element it will render we have to tell it
//     children: [ // we have multiple elements so taking an array else optional
//       // for nesting routes
//       { // first route
//         path: "", // path is empty because we want to display something on simple '/'
//         element: <Home />
//       },
//       {
//         path: 'about', // no '/' required because '/' is already used above
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} /> // home page of above slash because path = ''
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> // the id after /:__ is accessible in the component which is assigned to element (here User), dynamic values from url
      <Route
        loader={githubInfoLoader}
        // make call to db or api from here, when the mouse hovers over this component the call is sent and fetching is started (even before useEffect) and the fetched data is stored in the cache, a slight better optimization
        // Either: make direct fetch call from here in a call back function
        // Or: call the function
        path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* takes a prop otherwise it'll not work */}
  </StrictMode>,
)
