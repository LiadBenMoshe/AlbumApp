import React, { useState } from 'react';
import PictureForm from './components/PictureForm.tsx';
import PictureList from './components/PictureList.tsx';
import { Box } from '@mui/material';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handlePictureAdded = () => {
    setRefresh(prev => !prev);
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, padding: 4, justifyContent: 'center' }}>
      <PictureList refresh={refresh} />
      <PictureForm onPictureAdded={handlePictureAdded} />
    </Box>
  );
};

export default App;