import React from 'react'  
import resturant from './components/Images/resturant.jpg' 
import hotel from './components/Images/hotel.jpg'
import conference from './components/Images/conference.jpg' 
import art from './components/Images/art.jpg'
import sport from './components/Images/sport.jpg'
import venue from './components/Images/venue.jpg'
import home from './components/Images/home.jpg'
import stadium from './components/Images/stadium.jpg'
import park from './components/Images/park.jpg'
import Grid from '@mui/material/Grid' 
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Nav from './Nav'
  
export default function Location() {  
    const res = [  
        { pic:'./images/one.jpg',location: "Resturant",Capacity:10000,amenities:"highly avialable",budget:50000,available: true },  
         ]  
const hot = [  
{ pic:'./images/one.jpg',location: "Hotels",Capacity:"50,000",amenities:"customized",budget:10000,available: true },  
  ] 
  const con = [  
    { pic:'./images/one.jpg',location: "Conference Centers",Capacity:"1,00,000",amenities:"highly avialable",budget:500000,available: true },  
      ]  

      const arte = [  
        { pic:'./images/one.jpg',location: "Art Galeries",Capacity:"50,000",amenities:"low",budget:20000,available: true },  
          ] 

          const spor = [  
            { pic:'./images/one.jpg',location: "Sports Club",Capacity:"5,00,000",amenities:"high",budget:200000,available: true },  
              ] 
const ace = [  
{ pic:'./images/one.jpg',location: "Academic Venue",Capacity:"2,00,000",amenities:"available",budget:10000,available: false },  
                  ] 

const sta = [  
    { pic:'./images/one.jpg',location: "Stately Home",Capacity:"1,00,000",amenities:"available",budget:30000,available: true },  
  ] 
const stu = [  
 { pic:'./images/one.jpg',location: "Stadium",Capacity:"3,00,000",amenities:"available",budget:300000,available: true },  
 ]  
 const par = [  
    { pic:'./images/one.jpg',location: "Parks and Fields",Capacity:"50,000",amenities:"available",budget:70000,available: true },  
    ] 
  
    return (  
        <div >  
            <Nav/>
            <Grid  
                container  
                spacing={2}  
                direction="row"  
                justify="flex-start"  
                alignItems="flex-start"  
            >  
                {res.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={res.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={resturant} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}  

{hot.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={hot.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={hotel} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

{con.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={con.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={conference} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

                {arte.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={arte.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={art} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}
                {spor.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={spor.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={sport} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}  

                 {ace.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={ace.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={venue} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))} 

                {sta.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={sta.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={home} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}

                {stu.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={stu.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={stadium} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))} 

                {par.map(mb => (  
                    <Grid item xs={12} sm={4} md={4} key={par.indexOf(mb)}>  
                        <Card>  
                        <CardMedia component="img" image={park} height={320}/>    
                              
                            <CardContent>  
                                <Typography variant="h6">  
                                 <b>  {mb.location} </b> 
                                </Typography>  
                                <Typography variant="subtitle1">  
                                   <b>Capacity:  {mb.Capacity}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Amenities:   {mb.amenities}</b>  
                                </Typography>  
                                <Typography variant="subtitle1">  
                                <b>Budget: Rs  {mb.budget} /-</b>  
                                </Typography> 
                                <Typography variant="subtitle2">  
                               <b> Available: {mb.available?"Yes" : "No"}</b>  
                                </Typography>  
                            </CardContent>  
                            <CardActionArea>  
                                <Button  variant="contained" color="primary">Book Location</Button>  
                            </CardActionArea>  
                        </Card>  
                     </Grid>  
                ))}   
            </Grid>  
        </div>  
    )}