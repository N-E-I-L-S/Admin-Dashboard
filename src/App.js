import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
   <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='app'>
      <Sidebar isSidebar={isSidebar} />
      <main className='content'>
      <Topbar setIsSidebar={setIsSidebar} />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
      </main>
      </div>
    </ThemeProvider>
   </ColorModeContext.Provider>
   </>
  );
}

export default App;
