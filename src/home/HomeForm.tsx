import './HomeForm.css';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseLine from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import BookGrid from '../book-grid/BookGrid';

const drawerWidth = 240;
function HomeForm() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('Home');
  const [isClosing, setIsClosing] = React.useState(true);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleListItemClick = (text: string) => {
    setSelectedItem(text);
    handleDrawerClose();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Home', 'Me'].map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            component="button"
            onClick={() => handleListItemClick(text)}
            sx={{
              ...(selectedItem === text && {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                '& .MuiListItemIcon-root': {
                  color: 'primary.main',
                },
              }),
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? (
                <HomeOutlinedIcon />
              ) : (
                <SentimentSatisfiedAltOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseLine />
      <AppBar
        position="fixed"
        sx={{
          width: `100%`,
          ml: `0`,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Best Library out there :D
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="me"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {selectedItem === 'Home' && <BookGrid />}
      </Box>
    </Box>
  );
}
export default HomeForm;
