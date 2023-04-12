import './App.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Typewriter from 'typewriter-effect';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function App() {
  const text1 = "Dear Anisha,"
  const text2 = "Last month was a rollercoaster for us. There are a lot of things happening, but thanks to Allah, our relationship is still strong. As you know, I'm not good with words. So I would like to keep it short and simple. Thanks for believing in me for the last 31 days. It means a lot to me, and I hope that we will be together until Jannah. Happy Monthsary. ❤️"

  const font = "'Cutive Mono', monospace"
  const fontTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: font,
    },
  })

  function funcType1() {
    return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text1)
            .changeDelay("natural")
            .start();
        }}
      />
    )
  }

  const DelayComponent = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, 2300)

      return () => clearTimeout(timeout)

    }, [show])

    if (!show) return null

      return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(text2)
              .changeDelay("natural")
              .start();
          }}
        />
      )
  }

  return (
    <ThemeProvider theme={fontTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ my: 5 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h2>{funcType1()}</h2>
          <Box sx={{ px: 3 }}>
            <h3>{DelayComponent()}</h3>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
