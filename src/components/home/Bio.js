import React from 'react'
import { Box, Paper, Card, Typography, CardMedia, CardContent } from '@mui/material'
import { aboutMe } from '../../assets/text'

const Bio = () => {

    const boxStyle = {
        display: 'flex',
        width: '100%'
     }


    const cardStyle = {
        display: 'flex',
        width: '100%',
    }
    return(
       
        <Card sx={cardStyle} elevation={12} >
            
            <Box sx={{ width: '75%'}}>
            <CardContent sx={{ flex: '1 0 auto', width:'90%'}}>

                <Typography variant='h3'>
                    About me
                </Typography>
                <Typography variant='h6' align='justify'>
                    {aboutMe}
                </Typography>
            </CardContent>
            </Box>
            <Box sx={{ width: '25%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <CardMedia
                component='img'
                image={require('../../assets/images/portfoliophoto.jpg')}
                sx= {{ height:'90%', width:'90%', borderRadius:'30px'}}
            />
            </Box>
           
        </Card>
        
           
    )
}

export default Bio