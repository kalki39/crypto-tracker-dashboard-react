import React , {useState}from 'react';
import "./styles.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/system';
import red from '@mui/material/colors/red';
import Grid from '../Grid';
import List from '../List';
// import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme=createTheme({
    palette:{
        primary:{
            main: "#3a80e9",
        }
    }
  });

  const style={
    color: "var(--white)",
    width:"50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily:"Inter",
    textTransform:"capitalize",
  }

//   3a80e9

  return (
    <ThemeProvider>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth" aria-label="lab API tabs example">
            <Tab label="grid" value="grid" sx={style} className="ff"/>
            <Tab label="list" value="list" sx={style} className="ff"/>
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
          {
            coins.map((item,i)=>(
              <Grid coin={item} key={i}/>
            ))
          }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table>
            {
              coins.map((coin,i)=>(
                  <List coin={coin}/>
              ))
            }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}