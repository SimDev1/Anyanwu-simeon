import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseSnack = () => setSnack({ ...snack, open: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EMAILJS CONFIG
    const serviceID = 'service_3gby3y1';
    const templateID = 'template_yhinu7h';
    const publicKey = 'zsIITmCvdl0EaXru_';

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      // Send with EmailJS
      await emailjs.send(serviceID, templateID, emailParams, publicKey);

      // Send with Formspree (optional fallback)
      await fetch('https://formspree.io/f/manjlvgz', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });

      setSnack({ open: true, message: 'Message sent successfully 🎉', severity: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSnack({ open: true, message: 'Failed to send message ❌', severity: 'error' });
    }
  };

  return (
    <Box
      id="Contact"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        data-aos="zoom-in"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 4, sm: 6 },
          width: '100%',
          maxWidth: 600,
          borderRadius: 3,
          backgroundColor: '#111827',
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom sx={{ color: 'white' }}>
          Talk to Me <span role="img" aria-label="smile">😊</span>
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 3 }}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
            InputProps={{
              sx: {
                backgroundColor: '#0f172a',
                color: 'white',
                borderRadius: 1,
                border: '1px solid #00e0ff',
              },
            }}
            InputLabelProps={{ style: { color: '#94a3b8' } }}
          />

          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            InputProps={{
              sx: {
                backgroundColor: '#0f172a',
                color: 'white',
                borderRadius: 1,
                border: '1px solid #00e0ff',
              },
            }}
            InputLabelProps={{ style: { color: '#94a3b8' } }}
          />
        </Box>

        <TextField
          fullWidth
          name="message"
          label="Project Details"
          variant="outlined"
          multiline
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          sx={{ mt: 3 }}
          InputProps={{
            sx: {
              backgroundColor: '#0f172a',
              color: 'white',
              borderRadius: 1,
              border: '1px solid #00e0ff',
            },
          }}
          InputLabelProps={{ style: { color: '#94a3b8' } }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            py: 2,
            fontSize: '1rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #00e0ff, #007aff)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(to right, #007aff, #00e0ff)',
            },
          }}
        >
          Send Message
        </Button>

        <Box mt={2} textAlign="center">
          <Typography sx={{ color: '#bbb', fontSize: '0.9rem' }}>
            Or chat via <a href="https://wa.me/2348074387045" target="_blank" rel="noreferrer" style={{ color: '#00ffcc' }}>WhatsApp</a>
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.severity} onClose={handleCloseSnack} variant="filled" sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
