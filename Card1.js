import React from 'react' 
import { makeStyles } from '@material-ui/core/styles' 
import  underwater from './Components/Images/underwater.jpg'
import  springhassprung from './Components/Images/springhassprung.jpg'
import  mudermysteryparty from './Components/Images/mudermysteryparty.jpg'
import luau from './Components/Images/luau.jpg'
import dancethroughdecades from './Components/Images/dancethroughdecades.jpg'
import cateredbrunch from './Components/Images/cateredbrunch.jpg'
import superlativeawardimages from './Components/Images/superlativeawardimages.jpg'
import outerspace from './Components/Images/outerspace.jpg'
import happyhour from './Components/Images/happyhour.jpg'



 
import { 
    Grid, 
    Card, 
    Button, 
    CardMedia, 
    CardContent, 
    Typography, 
    CardHeader, 
    CardActionArea 
} from '@material-ui/core/' 
 
const useStyles = makeStyles(theme => ({ 
    root: { 
       
 
        flexGrow:1, 
         
        padding: theme.spacing(1) 
    } 
})) 
 
 function Card1() { 
    const classes = useStyles() 
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
        <div className={classes.root}> 
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
                        <CardMedia component="img" image={underwater}/>   
                             
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
                        <CardMedia component="img" image={springhassprung}/>   
                             
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
                        <CardMedia component="img" image={luau}/>   
                             
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
                        <CardMedia component="img" image={dancethroughdecades}  height ={287}/>   
                             
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
                        <CardMedia component="img" image={cateredbrunch} height ={287}/>   
                             
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
                    <Grid item xs={12} sm={5} md={4} key={mble.indexOf(mb)}> 
                        <Card> 
                        <CardMedia component="img" image={superlativeawardimages}/>   
                             
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
                        <CardMedia component="img" image={outerspace} height={317}/>   
                             
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
                        <CardMedia component="img" image={happyhour}/>   
                             
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
export default Card1;