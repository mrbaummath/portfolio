import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import { statDescription, badgesDescription, checkersDescription, graderDescription } from '../../assets/text'
import ProjectCard from './ProjectCard'

const Projects = (props) => {
    const graderImageSrc = ''
    return (
        <Container sx= {{ width: '100vw'}} maxWidth='100vw'>
    <Grid container sx={{width:'100%'}} spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h2'>
                Projects
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <ProjectCard 
                side='left' 
                image={require('../../assets/images/grader.png')}
                description={graderDescription}
                title='Grader'
                cast={require('../../assets/screencasts/grader-screencast.mp4')}
            />
            <ProjectCard
                side='right'
                image={require('../../assets/images/badges.png')}
                description={badgesDescription}
                title='Honey Badges'
                cast=''
            />
            <ProjectCard
                side='left'
                image={require('../../assets/images/stats.png')}
                description={statDescription}
                title='Stat Generator'
                cast=''
            />
            <ProjectCard
                side='right'
                image={require('../../assets/images/checkers.png')}
                description={checkersDescription}
                title='Checkers'
                cast=''
            />

        </Grid>
    </Grid>
    </Container>
    )
}

export default Projects