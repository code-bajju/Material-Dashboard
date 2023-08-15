import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import useResponsive from '../hooks/useResponsive';
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import { LoginForm } from '../sections/auth/login';

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundImage: `url('/assets/illustrations/bg.jpg')`,
    backgroundSize: 'cover',
    backgroundColor: '#96144C',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | Axis Bank </title>
      </Helmet>

      <StyledRoot>
       

        <Container maxWidth="sm">
          <StyledContent>
            <Typography style={{color:'white',textAlign:'center'}} variant="h4" gutterBottom>
              Login
            </Typography>

            <Typography style={{color:'white',textAlign:'center'}} variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link style={{color:'#96144C'}} variant="subtitle2">Get started</Link>
            </Typography>

            
            <Divider  style={{color:'white'}} sx={{ my: 3 }}>
              <Typography style={{color:'white'}} variant="body2" sx={{ color: 'text.secondary' }}>
             Login to Your Account
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
