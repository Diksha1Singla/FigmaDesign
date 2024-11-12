import './App.css';
import {ColorModeContext , useMode} from "./theme"
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Routes,Route} from "react-router-dom"
import Topbar from "./scenes/global/Topbar"
import Dashboard from "./scenes/dashboard"
import Sidebar from "./scenes/global/Sidebar"
import Line from './scenes/line';
import Login from "./scenes/login/login"
import Pie from "./scenes/pie/pie"

function App() {
  const [theme,colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
          {/* <Sidebar/> */}
          <main className='content'>
            {/* <Topbar/>      */}
            <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/line" element={<Line/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/pie' element={<Pie/>}/>
            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
