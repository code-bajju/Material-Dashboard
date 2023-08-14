import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, Select, MenuItem, Button } from '@mui/material';

const LeaveManagementPage = () => {
  const leaveData = [
    {
      id: 1,
      names: "Bajrang Gour",
      duration: "5 days",
      startDate: "2023-08-10",
      endDate: "2023-08-14",
      type: "Sick Leave",
      reasons: "Fever",
    },
    {
        id: 2,
        names: "Sushant Dhiman",
        duration: "5 days",
        startDate: "2023-08-10",
        endDate: "2023-08-14",
        type: "Sick Leave",
        reasons: "Fever",
      },
      {
        id: 1,
        names: "Sujal Garg",
        duration: "5 days",
        startDate: "2023-08-10",
        endDate: "2023-08-14",
        type: "Sick Leave",
        reasons: "Fever",
      },
      {
        id: 1,
        names: "Sahil Panwar",
        duration: "5 days",
        startDate: "2023-08-10",
        endDate: "2023-08-14",
        type: "Sick Leave",
        reasons: "Fever",
      },
      {
        id: 1,
        names: "Vishal Gupta",
        duration: "5 days",
        startDate: "2023-08-10",
        endDate: "2023-08-14",
        type: "Sick Leave",
        reasons: "Fever",
      },
      {
        id: 1,
        names: "Komal Rajput",
        duration: "5 days",
        startDate: "2023-08-10",
        endDate: "2023-08-14",
        type: "Sick Leave",
        reasons: "Fever",
      },

    // Add more leave data as needed
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Leave Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name(s)</TableCell>
              <TableCell>Duration(s)</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Reason(s)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.names}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.reasons}</TableCell>
                <TableCell>
                  <FormControl>
                    <Select defaultValue="" displayEmpty>
                      <MenuItem value="" disabled>
                        Select Action
                      </MenuItem>
                      <MenuItem value="accept">Accept</MenuItem>
                      <MenuItem value="decline">Decline</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LeaveManagementPage;
