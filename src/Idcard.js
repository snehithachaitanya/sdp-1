import React from 'react'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/styles'
import Nav from './Nav'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});


function Icard() {
  const classes = useStyles();

  return (
    <div>
    <Nav/>
    <center>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  <Card className={classes.root} style={{ border: "2px solid black" }}>
      <CardMedia
        className={classes.media}
        image="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
        title="student pic"
      />
      <CardContent style={{backgroundColor: "pink"}} >
    <Typography gutterBottom variant="h5" component="div">
      <center>student name</center>
    </Typography>
    <Typography variant="body2" color="text.secondary">
    <center> designation:<br></br>
     cse department klu <br></br>
     from:andra pradesh<br></br>
     </center>
    </Typography>
  </CardContent>  
  </Card>
  </center>
  </div>
  )
}

export default Icard