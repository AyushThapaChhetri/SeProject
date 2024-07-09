import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFoundPage';
import Shop from './components/Shop';
import Cart from "./components/Cart";
import { ShopContextProvider } from './context/shopContext'; 

function App() {
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
    
  ]);

  return (
    <ShopContextProvider> 
      <>
        {/* {navbar} */}
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouterProvider>
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