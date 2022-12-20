import React, { useState } from 'react'
import { Box, Card, Typography, CardMedia, CardContent } from '@mui/material'
import CastModal from './CastModal'
import LinksModal from './LinksModal'


const ProjectCard = ({image, cast, side, title, description, links}) => {

    const [openCastModal, setOpenCastModal] = useState(false)
    const [openLinksModal, setOpenLinksModal] = useState(false)

    const leftMargin = side === 'left' ? '2em' : '15%'

    const handleCloseCastModal = () => {
        setOpenCastModal(false)
    }

    const handleCloseLinksModal = () => {
        setOpenLinksModal(false)
    }

    const handleOpenCastModal = () => {
        setOpenCastModal(true)
    }

    const handleOpenLinksModal = () => {
        setOpenLinksModal(true)
    }

    const projectCardStyle = {
        width: '85%',
        display:'flex',
        mb: 5,
        ml: leftMargin,
    }

    const titleStyle = {
        '&:hover': {
            cursor: 'pointer'
        },
        textDecoration: 'underline'
    }

    const imageStyle = {
        '&:hover': {
            cursor: 'pointer',
            transform: 'translate(-2%, -2%)'

        },
        height: '90%',
        width: '90%',
        objectFit:'scale-down'
    }

    const cardContent = 
        <Box sx={{width: '75%'}} >
            <CardContent sx={{ flex: '1 0 auto', width: '90%'}}>
                <Typography variant='h3' sx={titleStyle} onClick={handleOpenLinksModal}>
                    {title}
                </Typography>
                <Typography variant = 'subtitle1' align ='justify'>
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
                onClick={handleOpenCastModal}
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
        <CastModal cast={cast} open={openCastModal} handleClose={handleCloseCastModal} />
        <LinksModal links={links} open={openLinksModal} handleClose={handleCloseLinksModal} />
     </div>
    )
}

export default ProjectCard