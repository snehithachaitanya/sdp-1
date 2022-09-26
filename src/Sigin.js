import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import Paper from '@mui/material/Paper';


function Signin() {
  return (
    <center>
        <div className='bg' style={{ padding: 30}} >
          <h3>SignIn</h3>
          <Box width ='300px'> 
          <Paper sx ={{padding: '32px'}} elevation ={4}> 
      <Grid
        container
        spacing={3}
        direction={'column'}
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12}>
          <TextField label="Username"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={'password'}></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                
                label={'Keep me logged in'}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Keep me logged in"
          />
        </Grid>
        <Grid item xs={12}>
        <Button style={{background:"cyan"}}>
        <Link to="/Nav">LOGIN</Link>
        </Button>
        </Grid>
      </Grid>
     </Paper>
     </Box>
      
    </div>
    </center>
  )
}

export default Signin