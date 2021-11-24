import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const tabNames = ['Open Orders(0)', 'Order History', 'Trade History', 'Funds'];

const  MuiTabs = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: `#184890`,
          '& .MuiButtonBase-root': {
            color: `#ffffff`,
            display: `flex`,
            flexDirection: `row-reverse`,
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#FFB81C'
          },
          '& .MuiButtonBase-root.Mui-selected': {
            color: '#FFB81C',
          },
          '& .MuiButtonBase-root:hover': {
            color: '#FFB81C',
          },
        }}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {
          tabNames.map((name, index) =>
            <Tab key={index.toString()} label={`${name}`}/>)
        }
      </Tabs>
    </Box>
  );
}

export default MuiTabs;