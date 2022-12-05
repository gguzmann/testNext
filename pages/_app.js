import { Box, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{display:'flex'}}>
          <Navbar />
          <Box sx={{m:5, width:'90%'}}>

          <Component {...pageProps} />
          </Box>
      </Box>
    </ThemeProvider>
  )
}

export default MyApp
