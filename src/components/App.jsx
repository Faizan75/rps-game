import "./App.css";
import DisplayIcon from "./DisplayIcon";
import Header from "./Header";
import Message from "./Message";
import ScoreBoard from "./ScoreBoard";
import AppContextprovider from "../Store/AppContext";
import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";

function App() {
  return (
    <AppContextprovider>
      <Header />
      <Outlet/>
    </AppContextprovider>
  );
}

export default App;
