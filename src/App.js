import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import DashboardSettings from "./scenes/dashboardsettings";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Academics from "./scenes/academics";
import Bar from "./scenes/bar";
// import Form from "./scenes/form";
import User from "./scenes/users";
import  Classes from "./scenes/classes";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Students from "./scenes/students";
import Admin from "./scenes/administrative";
import Subjects from "./scenes/subjects";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboardsettings" element={<DashboardSettings/>} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              <Route path="/academics" element={<Academics />} />
              <Route path="/students" element={<Students />} />
              <Route path="/administrative" element={<Admin />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/users" element={<User />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
