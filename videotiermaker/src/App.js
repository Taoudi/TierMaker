import React, { Component, useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Tier from './components/Tier'

import deepPurple from '@material-ui/core/colors/deepPurple';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components'
import './css/App.css';


function App(){
  
  const [page, setPage] = useState('home');
  const [tierList, setTierList] = useState(false);
  const [URL, setURL] = useState('');






  const theme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
        dark: deepPurple[800],
        verydark: deepPurple[900],
        light: deepPurple[300],
        contrastText: "#ede7f6"
      },
      secondary: {
        main: '#ce93d8',
      },
    },
    spacing: [0, 2, 3, 5, 8]
  });

    return (
      <ThemeProvider theme={theme}>
      <div style={{alignItems: 'center'}}>
        <div>
          <NavBar handleClick={setPage} state={page} bcolor={theme.palette.primary.dark} tcolor={theme.palette.primary.contrastText}/>
        </div>
        <div>
        {{
          'home': <Home />,
          'tier': <Tier setURL={setURL} theme={theme}/>
        }[page]}
        </div>
      </div>
      </ThemeProvider>
    );
  }

export default App;