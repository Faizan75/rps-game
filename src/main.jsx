import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
import Gamerule from "../src/components/Gamerule";
import "bootstrap/dist/css/bootstrap.css";
import MainContent from "./components/MainContent.jsx";
import Moregames, { gameloader } from "./components/Moregames.jsx";

const router=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
    {path:"/",element:<MainContent/>},
    {path:"rule",element:<Gamerule/>},
    {path:"/more-games",element:<Moregames/> ,loader:gameloader}
  ]}
])

 
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
