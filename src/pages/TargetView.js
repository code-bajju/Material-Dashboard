import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Snackbar,
  Button,
} from '@mui/material';

const TargetView = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [exportedData, setExportedData] = useState(null);

  const targetInfoList = [
    {
      "title": "Project Alpha",
      "description": "Efficiency optimization for manufacturing process.",
      "employee": "Alex Johnson",
      "startDate": "2023-08-05",
      "endDate": "2023-08-20"
    },
    {
      "title": "Marketing Campaign",
      "description": "Launch new product marketing campaign.",
      "employee": "Emily Williams",
      "startDate": "2023-08-12",
      "endDate": "2023-08-28"
    },
    {
      "title": "Quarterly Sales Review",
      "description": "Analyze sales performance and forecast for the quarter.",
      "employee": "Michael Anderson",
      "startDate": "2023-08-03",
      "endDate": "2023-08-18"
    },
    {
      "title": "Website Redesign",
      "description": "Revamp company website for improved user experience.",
      "employee": "Sophia Martin",
      "startDate": "2023-08-08",
      "endDate": "2023-08-23"
    }
  ];

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleExportData = () => {
    setExportedData(targetInfoList);
    setShowConfirmation(true);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper style={{ padding: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleExportData}
  style={{ marginLeft: '10px', backgroundColor: '#96144C', color: 'white', borderRadius: '4px' ,float: 'right',}}

        >
          Export Data
        </Button>
        <br/>
        <Typography variant="h5" gutterBottom>
          Saved Target Information
        </Typography>
        {targetInfoList.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Employee</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {targetInfoList.map((targetInfo, index) => (
                  <TableRow key={index}>
                    <TableCell>{targetInfo.title}</TableCell>
                    <TableCell>{targetInfo.description}</TableCell>
                    <TableCell>{targetInfo.employee}</TableCell>
                    <TableCell>{targetInfo.startDate}</TableCell>
                    <TableCell>{targetInfo.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No saved data available.</Typography>
        )}
      </Paper>
      <Snackbar
        open={showConfirmation}
        autoHideDuration={3000}
        onClose={handleCloseConfirmation}
        message="Target data has been exported."
      />
    </Container>
  );
};

export default TargetView;
