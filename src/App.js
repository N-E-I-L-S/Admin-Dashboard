import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css'
import Bar from './pages/BarPage';
import Piepage from './pages/PiePage';
import LinePage from './pages/LinePage';
import Calendar from './pages/Calender';
import Form from './pages/FormPage';
import FAQ from './pages/Faq';

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
        <Route path='/bar' element={<Bar/>}/>
        <Route path='/pie' element={<Piepage/>}/>
        <Route path='/line' element={<LinePage/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      </main>
      </div>
    </ThemeProvider>
   </ColorModeContext.Provider>
   </>
  );
}

export default App;
