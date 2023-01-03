import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import { statDescription, badgesDescription, checkersDescription, graderDescription } from '../../assets/text'
import ProjectCard from './ProjectCard'

const Projects = (props) => {

    const graderLinks = [
        {'title': 'Front-end Repo', 'href': 'https://github.com/mrbaummath/grader-client'},
        {'title': 'Back-end Repo', 'href': 'https://github.com/mrbaummath/grader-API'}
    ]

    const honeyBadgesLinks = [
        {'title':'Deployed', 'href': 'https://gleaming-platypus-fa2f95.netlify.app/'},
        {'title':'Front-end Repo', 'href': 'https://github.com/mrbaummath/honey-badgers-client'},
        {'title':'Back-end Repo', 'href': 'https://github.com/mrbaummath/honey-badgers-API'}
    ]

    const statLinks = [
        {'title':'Deployed', 'href': 'https://stat-generator.fly.dev/'},
        {'title':'Full Stack Repo', 'href': 'https://github.com/mrbaummath/project2'}
    ]

    const checkersLinks = [
        {'title':'Deployed','href':'https://mrbaummath.github.io/checkers/'},
        {'title':'Code Base', 'href': 'https://github.com/mrbaummath/checkers'}
    ]

    
    return (
    <Container sx= {{ width: '100vw'}} maxWidth='100vw'>
        <Grid container sx={{width:'100%'}} spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h2'>
                    Projects
                </Typography>
                <Typography variant='subtitle'>
                    (click titles for additional links, images for screencasts)
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ProjectCard 
                    side='left' 
                    image={require('../../assets/images/grader.png')}
                    description={graderDescription}
                    title='Grader'
                    cast={require('../../assets/screencasts/grader-screencast.mp4')}
                    links = {graderLinks}
                />
                <ProjectCard
                    side='right'
                    image={require('../../assets/images/badges.png')}
                    description={badgesDescription}
                    title='Honey Badges'
                    cast={require('../../assets/screencasts/honey-badges-screencast.mp4')}
                    links = {honeyBadgesLinks}
                />
                <ProjectCard
                    side='left'
                    image={require('../../assets/images/stats.png')}
                    description={statDescription}
                    title='Stat Generator'
                    cast={require('../../assets/screencasts/Stat-gen-screencast.mp4')}
                    links={statLinks}
                />
                <ProjectCard
                    side='right'
                    image={require('../../assets/images/checkers.png')}
                    description={checkersDescription}
                    title='Checkers'
                    cast={require('../../assets/screencasts/checkers-screencast.mp4')}
                    links={checkersLinks}
                />

            </Grid>
        </Grid>
    </Container>
    )
}

export default Projects