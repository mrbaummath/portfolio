import React, { useState } from 'react'
import { Box, Card, Typography, CardMedia, CardContent } from '@mui/material'
import CastModal from './CastModal'


const ProjectCard = ({image, cast, side, title, description, deployedUrl, frontUrl, backUrl}) => {

    const [open, setOpen] = useState(false)

    const leftMargin = side === 'left' ? '2em' : '15%'

    const handleClose = () => {
        setOpen(false)
    }

    const handleModalOpen = () => {
        setOpen(true)
    }

    const projectCardStyle = {
        width: '80%',
        display:'flex',
        mb: 5,
        ml: leftMargin,
    }

    const imageStyle = {
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '5px 5px #444444',
            transform: 'translate(-2%, -2%)'

        },
        height: '90%',
        width: '90%',
        borderRadius: '30px'
    }

    const cardContent = 
        <Box sx={{width: '75%'}} >
            <CardContent sx={{ flex: '1 0 auto', width: '90%'}}>
                <Typography variant='h3'>
                    {title}
                </Typography>
                <Typography variant = 'h6' align ='justify'>
                    {description}
                </Typography>
            </CardContent>
        </Box>
    
    const cardImage = 
        <Box sx={{ width:'25%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <CardMedia
                component='img'
                image={image}
                sx={imageStyle}
                onClick={handleModalOpen}
            />
        </Box>

    return (
    <div>
        <Card sx={projectCardStyle} elevation={12}>
            {side === 'left' ? 
                cardContent
                :
                cardImage
            }
            
            {side === 'right' ?
                cardContent
                :
                cardImage
            }
        </Card>
        <CastModal cast={cast} open={open} handleClose={handleClose} />
     </div>
    )
}

export default ProjectCard