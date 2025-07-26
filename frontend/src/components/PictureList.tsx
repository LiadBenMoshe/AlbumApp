import React, { useEffect, useState } from 'react';
import { getPictures } from '../api.ts';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

interface Picture {
  id: number;
  name: string;
}

const PictureList = ({ refresh }: { refresh: boolean }) => {
  const [pictures, setPictures] = useState<Picture[]>([]);

  useEffect(() => {
    getPictures().then(setPictures);
  }, [refresh]);

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 300 }}>
      <Typography variant="h6" mb={2}>Picture List</Typography>
      <List>
        {pictures.map(p => (
          <ListItem key={p.id} divider>
            <ListItemText primary={`${p.id} - ${p.name}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PictureList;
