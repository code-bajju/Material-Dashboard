import React from 'react';
import { Grid, Container, Typography, Card, CardContent, Rating } from '@mui/material';
import Iconify from '../components/iconify'; // Assuming you have your Iconify component

const TopRated = () => {
  const users = [
    {
      id: 1,
      name: 'Bajrang',
      image: 'https://avatars.githubusercontent.com/u/104210183?v=4',
      rating: 4.5,
      position: 'Web Developer'
    },
    {
      id: 2,
      name: 'Sushant',
      image: 'https://source.unsplash.com/featured/300x201',
      rating: 3.0,
      position: 'Backend Developer'
    },
    {
      id: 3,
      name: 'Sujal Garg',
      image: 'https://source.unsplash.com/featured/300x201"',
      rating: 5.0,
      position: 'Python Developer'
    },
    {
      id: 4,
      name: 'Sahil',
      image: 'https://source.unsplash.com/featured/300x201"',
      rating: 4.0,
      position: 'Ui/Ux Designer'
    },
  ];

  return (
    <Container>
      
      {/* <Grid container spacing={3}> */}
        {users.map((user) => (
          // <Grid item xs={12} md={6} key={user.id}>
            // <Card>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center',marginLeft:'-30px' }}>
                  <img
                    src={user.image}
                    alt={`${user.name} Avatar`}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      marginRight: '10px',
                    }}
                  />
                  <div>
                    <Typography style={{fontSize:'13px',fontWeight:'bold'}}>{user.name}</Typography>
                    <Typography variant="body2" style={{fontSize:'13px'}}>
                    {user.position}
                    </Typography>
                
                    <Rating style={{fontSize:'17px'}} name={`product-rating-${user.id}`} value={user.rating} precision={0.5} readOnly />
                  </div>
                </div>
              </CardContent>
            // </Card>
          // </Grid>
        ))}
    
    </Container>
  );
};

export default TopRated;
