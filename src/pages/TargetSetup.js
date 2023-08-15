import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from '@mui/material';

const TargetSetup = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false); // New state

  const employees = ['Employee 1', 'Employee 2', 'Employee 3'];

  const handleSave = () => {
    const targetInfo = {
      title,
      description,
      employee: selectedEmployee,
      startDate,
      endDate,
    };

    localStorage.setItem('targetInfo', JSON.stringify(targetInfo));
    setShowConfirmation(true); // Show confirmation message
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false); // Hide confirmation message
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Target Setup
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Employee</InputLabel>
          <Select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            label="Employee"
          >
            {employees.map((employee, index) => (
              <MenuItem key={index} value={employee}>
                {employee}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
  label="Start Date"
  type="date"
  variant="outlined"
  fullWidth
  value={startDate}
  onChange={(e) => setStartDate(e.target.value)}
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
/>
<TextField
  label="End Date"
  type="date"
  variant="outlined"
  fullWidth
  value={endDate}
  onChange={(e) => setEndDate(e.target.value)}
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
/>

        <Button
  variant="contained"
  color="primary"
  onClick={handleSave}
  style={{
    marginTop: '1rem',
    backgroundColor: '#96144C',
    color: 'white',
    borderRadius: '4px', // Adjust the value as needed
  }}
>
  Save
</Button>

      </Paper>
      <Snackbar
        open={showConfirmation}
        autoHideDuration={3000}
        onClose={handleCloseConfirmation}
        message="Target has been saved."
      />
    </Container>
  );
};

export default TargetSetup;
