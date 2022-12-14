import { Box, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow:'hidden' }}>
        <Navbar />
        <Box sx={{ m: 5, width: '90%' }}>

          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
