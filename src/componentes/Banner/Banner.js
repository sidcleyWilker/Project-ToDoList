// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import './Banner.css'

function Banner() {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //   <AppBar position="static">
        //     <Toolbar>
        //       <IconButton
        //         size="large"
        //         edge="start"
        //         color="inherit"
        //         aria-label="menu"
        //         sx={{ mr: 2 }}
        //       >
        //         <MenuIcon />
        //       </IconButton>
        //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //         Task List
        //       </Typography>
        //       <Button color="inherit">Sobre</Button>
        //     </Toolbar>
        //   </AppBar>
        // </Box>
        // 
        <header className='banner'>
          <img src="/img/banner02.avif" alt="logo"/>
          {/* <img src="/img/banner01.png" alt="logo"/> */}
        </header>
        
      );
}

export default Banner;