import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from '@mui/material';
import TargetSetup from './TargetSetup';
import TargetView from './TargetView';

const Performance = () => {
  const [currentPage, setCurrentPage] = useState('Target Setup');
  const [targetInfo, setTargetInfo] = useState(null);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
   <ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button
    variant="contained"
    style={{
      marginTop: '1rem',
      marginRight: '10px',
      backgroundColor: '#96144C',
      color: 'white',
      borderRadius: '4px', // Adjust the value as needed
    }}
    onClick={() => setCurrentPage('Target Setup')}
  >
    Target Setup
  </Button> 
  <Button
    variant="contained"
    style={{
      marginTop: '1rem',
      backgroundColor: '#96144C',
      color: 'white',
      borderRadius: '4px', // Adjust the value as needed
    }}
    onClick={() => setCurrentPage('Target View')}
  >
    Target View
  </Button>
</ButtonGroup>

      {currentPage === 'Target Setup' && <TargetSetup setTargetInfo={setTargetInfo} />}
      {currentPage === 'Target View' && <TargetView targetInfo={targetInfo} />}
    </Container>
  );
};

export default Performance;


// <Button
//   variant="contained"
//   color="primary"
//   onClick={handleSave}
//   style={{ marginTop: '1rem' }}
//   className="custom-button" // Add a custom CSS class
// >
//   Save
// </Button>