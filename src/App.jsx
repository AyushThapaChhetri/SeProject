import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFoundPage';
import Shop from './components/Shop';
import Cart from "./components/Cart";
import Navbar from './components/Navbar'
import Desc from './components/Desc'
import Footer from './components/Footer'


import { ShopContextProvider } from './context/shopContext'; 

function App() {

  const current_theme=localStorage.getItem('current_theme');
  const[theme,setTheme]=useState(current_theme?current_theme:'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/desc",
      element: <Desc />,
    }
    
  ]);

  return (
    <ShopContextProvider> 
      <>
      {/* <div className={`container ${theme}`}> */}
        <Navbar theme={theme} setTheme={setTheme}/>
      {/* </div> */}
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart" element={<Desc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouterProvider>
        <Footer/>
      </>
    </ShopContextProvider>
  );
}

export default App;


// app.jsx

// import React, { createContext, useState } from "react";
// import { BrowserRouter, Routes, Route, createBrowserRouter,RouterProvider} from "react-router-dom";

// import Home from './components/Home'
// import NotFound from './components/NotFoundPage'
// import Shop from './components/Shop'
// import { shopContextProvider } from './context/shopContext';

// function App() {
//   //const [count, setCount] = useState(0)
//   const router = createBrowserRouter([{
//     path:"/",
//     element:<Home/>,
//     errorElement:<NotFound/>
//   },
//   {
//     path:"/shop",
//     element:<Shop/>,
//   }
//   ]);

//   return (
//     <shopContextProvider>
//       <>
//         {/* <Navbar/> */}
//         <RouterProvider router={router}/>
//       </>
//     </shopContextProvider>
      
//   )
// }

// export default App