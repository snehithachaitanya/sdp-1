import React from 'react'  
import season from './components/Images/season.jpg' 
import rice from './components/Images/rice.jpg'
import spring from './components/Images/spring.jpg'
import chicken from './components/Images/chicken.jpg'
import mutton from './components/Images/mutton.jpg'
import prawns from './components/Images/prawns.jpg'
import crunchwrap from './components/Images/crunchwrap.jpg'
import bean from './components/Images/bean.jpg'
import crunchyandsoft from './components/Images/crunchyandsoft.jpg'
import Grid from '@mui/material/Grid' 
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Nav from './Nav'
import { Link } from 'react-router-dom'
  
export default function Catering() {  
const mble = [  
    { pic:'./images/one.jpg', name: "Seasonal Mixed Vegetables",type :"vegeterian",price:250,quantity:"500 mg",available: true },  
 ]  
 const ris = [  
    { pic:'./images/one.jpg', name: "Risotto",type :"vegeterian",price:500,quantity:"258 mg",available: true },  
 ]  
 const veg = [  
    { pic:'./images/one.jpg', name: "Veg Spring rolls",type :"vegeterian",price:200,quantity:"1000 mg",available: true },  
 ] 
 const chi = [  
    { pic:'./images/one.jpg', name: "Chicken Briyani",type :"non-vegeterian",price:200,quantity:"300 mg",available: true },  
 ]
 const mu = [  
    { pic:'./images/one.jpg', name: "Mutton Curry",type :"non-vegeterian",price:400,quantity:"200 mg",available: false },  
 ]
 const pr = [  
    { pic:'./images/one.jpg', name: "Prawns Pickle",type :"non-vegeterian",price:350,quantity:"100 mg",available:true },  
 ]
 const cu = [  
    { pic:'./images/one.jpg', name: "Crunchwrap Supreme",type :"Vegan",price:450,quantity:"500 mg",available:true },  
 ] 
 const be= [  
    { pic:'./images/one.jpg', name: "Bean Burrito",type :"Vegan",price:400,quantity:"250 mg",available:true },  
 ] 
 const cus = [  
    { pic:'./images/one.jpg', name: "Crunchy Taco ",type :"Vegan",price:350,quantity:"100 mg",available:true },  
 ] 

    return (  
        <div> 
            <Nav/> 
            <Grid  
                container  
                spacing={2}  
                direction="row"  
                justify="flex-start"  
                alignItems="flex-start"  
            >  
                {mble.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={season} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">
                                <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}  

{ris.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={ris.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={rice} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">
                                <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{veg.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={veg.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={spring} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{chi.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={chi.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={chicken} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link></Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{mu.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={mu.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={mutton} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{pr.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={pr.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={prawns} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{cu.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={cu.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={crunchwrap} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link></Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{be.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={be.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={bean} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{cus.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={cus.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={crunchyandsoft} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                  <b>Name : {mb.name}  </b>
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Type:  {mb.type}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Price:  Rs. {mb.price}/-</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Quantity:  {mb.quantity}</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary"> <Link to="/Payment">
                                    Buy Now
                                    </Link>
                                    </Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}
            </Grid>  
        </div>  
    )}