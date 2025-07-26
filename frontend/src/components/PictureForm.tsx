import React, { useState } from 'react';
import { addPicture } from '../api.ts';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const PictureForm = ({ onPictureAdded }: { onPictureAdded: () => void }) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    description: '',
    fileName: '',
    fileContentBase64: '',
  });
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(',')[1];
      setForm(prev => ({
        ...prev,
        fileName: file.name,
        fileContentBase64: base64,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.fileName || !form.fileContentBase64) {
      setError('Picture name and file are required');
      return;
    }
    try {
      await addPicture(form);
      setError('');
      onPictureAdded();
      alert('Picture added!');
      setForm({
        name: '',
        date: '',
        description: '',
        fileName: '',
        fileContentBase64: '',
      });
    } catch (err: any) {
      setError(err.response?.data || 'Failed to add picture');
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setForm({
        name: '',
        date: '',
        description: '',
        fileName: '',
        fileContentBase64: '',
      });
      setError('');
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 400 }}>
      <Typography variant="h5" mb={2}>Add New Picture</Typography>
      {error && <Typography color="error" mb={2}>{error}</Typography>}
      <TextField
        label="Picture Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        required
        inputProps={{ maxLength: 50 }}
        margin="normal"
      />
      <TextField
        label="Picture Date"
        name="date"
        type="datetime-local"
        value={form.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
        inputProps={{ maxLength: 250 }}
        margin="normal"
      />
      <TextField
        label="File Name"
        name="fileName"
        value={form.fileName}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" component="label" sx={{ mt: 1 }}>
        Browse Picture
        <input type="file" accept="image/*" hidden onChange={handleFileChange} />
      </Button>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add Picture
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Paper>
  );
};

export default PictureForm;