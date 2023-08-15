import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------
export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            style: { color: 'white', fontWeight: 'bold', borderColor: 'white' }, // Set border color
          }}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton style={{ color: 'white' }} onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
            style: { color: 'white', fontWeight: 'bold', borderColor: 'white' }, // Set border color
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      
        <Link variant="subtitle2" underline="hover" style={{ color: 'white' }}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton style={{backgroundColor:'#96144C'}} fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
