import React from 'react' 
import underwater from './components/Images/underwater.jpg'
import  springhassprung from './components/Images/springhassprung.jpg'
import  mudermysteryparty from './components/Images/mudermysteryparty.jpg'
import luau from './components/Images/luau.jpg'
import dancethroughdecades from './components/Images/dancethroughdecades.jpg'
import cateredbrunch from './components/Images/cateredbrunch.jpg'
import superlativeawardimages from './components/Images/superlativeawardimages.jpg'
import outerspace from './components/Images/outerspace.jpg'
import happyhour from './components/Images/happyhour.jpg'
import Grid from '@mui/material/Grid' 
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Nav from './Nav'

 function Tttheam() { 
    const mble = [ 
        { pic:'./Components/Images/underwater.jpg', name : "Under water " , budget : 100000,season:"Summer",available: true,  },    
    ] 
 const spr = [ 
        { pic:'./Images/redmi.jpg', name : "Spring Has Sprung" , budget : 150000,season:"all seasons",available: true,  },     ] 
       
    
        const mur = [ 
            { pic:'./Images/redmi.jpg', name : "Murder Mystery Party" , budget : 175000,season:"Winter",available: true,  }, 
        ] 
        const lua = [ 
            { pic:'./Images/redmi.jpg', name : "Luau" , budget : 10000,season:"Summer",available: true,  }, 
        ]
        const dd = [ 
            { pic:'./Images/redmi.jpg', name : "Dance Through the D" , budget : 70000,season:"all seasons",available: true,  }, 
                ]
        const ca = [ 
            { pic:'./Images/redmi.jpg', name : "Catered Brunch" , budget : 170000,season:"all seasons",available: true,  },
        ]
        const sa = [ 
            { pic:'./Images/redmi.jpg', name : "Superlative Awards " , budget : 20000,season:"Summer",available: true,  }, 
        ]
        const os = [ 
            { pic:'./Images/redmi.jpg', name : " Outer the space " , budget : 999999,season:"Winter",available: true,  }, 
        ]
        const hh = [ 
            { pic:'./Images/redmi.jpg', name : "Happy hour " , budget :450000,season:"all seasons",available: true,  }, 
        ]

    return ( 
        <div > 
            <Nav/>
            <Grid 
                container 
                spacing={5} 
                direction="row" 
                justify="flex-start" 
                alignItems="flex-start" 
            > 
                {mble.map(mb => ( 
                    <Grid item xs={4} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={underwater} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}
                {spr.map(mb => ( 
                    <Grid item xs={4} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={springhassprung} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {mur.map(mb => ( 
                    <Grid item xs={4} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={mudermysteryparty} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {lua.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={luau} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {dd.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={dancethroughdecades}  height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {ca.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={cateredbrunch} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {sa.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={superlativeawardimages} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {os.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={outerspace} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                                
                                
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}  
                {hh.map(mb => ( 
                    <Grid item xs={12} sm={4} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={happyhour} height={316}/>   
                             
                            <CardContent> 
                                <Typography variant="h6"> 
                                  <b>Theme-Name : {mb.name} </b>
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                   <b>budget: Rs {mb.budget} /-</b> 
                                </Typography> 
                                <Typography variant="subtitle1"> 
                                <b>offered Season:   {mb.season}</b> 
                                </Typography> 
                                
                                <Typography variant="subtitle2"> 
                               <b> Available: {mb.available?"Yes" : "No"}</b> 
                                </Typography> 
                            </CardContent> 
                            <CardActionArea> 
                                <Button  variant="contained" color="primary">Apply theme</Button> 
                            </CardActionArea> 
                        </Card> 
                     </Grid> 
                ))}
                
               
            </Grid> 
        </div> 
 );   
}
export default Tttheam;