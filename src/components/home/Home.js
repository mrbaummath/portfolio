import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Container, Typography } from '@mui/material'
import Bio from './Bio'

const Home = () => {

    return(
    <Container sx= {{ width: '100vw'}} maxWidth='100vw'>
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
    )
}

export default Home