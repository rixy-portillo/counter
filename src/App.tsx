import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Counter />
    </Box>
  );
}

export default App;
