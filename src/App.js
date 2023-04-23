import { useState,useEffect } from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Cp from "./scenes/cp";
import AppDev from "./scenes/appdev";
import WebDev from "./scenes/webdev";
import Ml from "./scenes/ml";
import Foss from "./scenes/foss";
import Design from "./scenes/design";
import Blockchain from "./scenes/blockchain";
import InfoSec from "./scenes/infosec";
import Form from "./scenes/form";
import Displayer from "./akhilesh/displayer";
import LoginForm from "./akhilesh/login/Login";
import gitDisplayer from "./akhilesh/gitdisplayer";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(()=>{
    Displayer(); 
    gitDisplayer(); 

  },[isSidebar])
  // useEffect(()=>{
  //       gitDisplayer(); 
  //     },[])
  return (
    <div>
{/* <LoginForm/> */}
      {/* <Cp/> */}
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="dashboard--content">
            <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
              <Route path="/cp" element={<Cp />} />
              <Route path="/appdev" element={<AppDev />} />
              <Route path="/webdev" element={<WebDev />} />
              <Route path="/ml" element={<Ml />} />
              <Route path="/foss" element={<Foss/>} />
              <Route path="/design" element={<Design />} />
              <Route path="/infosec" element={<InfoSec />} />
              <Route path="/blockchain" element={<Blockchain />} />

              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
      
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  );
}

export default App;
