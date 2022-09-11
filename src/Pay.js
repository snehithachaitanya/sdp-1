import {Box,Paper} from '@mui/material' 
import {Stack,TextField,Button} from '@mui/material' 
 
export const Pay =() => { 
    <div> <h3> Payment Info</h3> </div> 
     return <Box width ='300px'> 
      <Paper sx ={{padding: '32px'}} elevation ={4}> 
         
          <Stack spacing={4}> 
            <Stack direction='row' spacing={2}> 
                <TextField label='Credit card number' variant='standard'/></Stack> 
            <Stack direction='row' spacing={2}></Stack> 
                <TextField label='cvc' type='password'/> 
            </Stack> 
         
        <TextField label='Year' variant='standard'/><br></br> 
        Month<br></br> 
        <select> 
            <option value="01">01</option> 
            <option value="02">02</option> 
            <option value="02">03</option> 
            <option value="02">04</option> 
            <option value="02">05</option> 
            <option value="02">06</option> 
            <option value="02">07</option> 
            <option value="02">08</option> 
            <option value="02">09</option> 
            <option value="02">10</option> 
            <option value="02">11</option> 
            <option value="02">12</option> 
        </select><br></br> 
        <Stack spacing={4}> 
            <Stack direction='row' spacing={2}></Stack> 
        <Button variant='contained'color='primary'>pay</Button> 
        </Stack> 
        
        </Paper> 
     </Box> 
      
  }