import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from './Nav';

const add = (e) =>
{
  e.preventDefault();
  if(this.state.username==="" )
  {
    alert("all the fielsd are mandatory");
    return
  }
  console.log(this.state);
}

function Signin() {
  return (
        <div style={{ padding: 30 }} >
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
        <Button style={{background:"pink"}}>
        <Link to="/Nav">LOGIN</Link>
        </Button>
        </Grid>
      </Grid>

      <Routes>
        <Route path="Home" element={<Nav/>}/>
      </Routes>
    </div>
  )
}

export default Signin