import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { CustomThemeProvider, useThemeContext } from './theme/ThemeProvider';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function AppContent() {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem', 
      width: '100vw'
    }}>
      <h1>Project Gallery</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'deeppink'}}>
        <IconButton 
          onClick={toggleTheme}
          sx={{
            outline: 'none',
            '&:focus': {
              outline: 'none',
            },
            '&:active': {
              outline: 'none',
            },
          }}
        >
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </div>
    </div>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <AppContent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
