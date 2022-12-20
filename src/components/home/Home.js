import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import Bio from './Bio'
import Social from './Social'

const Home = () => {

    return(
        <div>
    <Container sx= {{ width: '100vw', height: '100vh'}} maxWidth='100vw'>
    <Grid container sx={{width:'100%'}} spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h2'>
                Michael Baum Portfolio
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Bio />
        </Grid>
    </Grid>
   
    </Container>
    <Social />
    </div>

    )
}

export default Home