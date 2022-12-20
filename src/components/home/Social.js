import React from 'react'
import { Box, Typography, Container, Link, Stack, Grid } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



const Social = () => {
    return(
        <Container component='footer' sx={{position: 'absolute',bottom:0, width:'100vw'}} maxWidth='100vw'>
            <Grid container sx={{justifyContent:'center'}} spacing={1}>
                <Grid item lg={1}>
                    
                    <Link
                        href='https://www.linkedin.com/in/michael-p-baum/'
                        sx={{mb:0.5 }}
                    >
                        <Stack direction='row' spacing={1} alignItems='center'>
                        
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                        </Stack>
                    </Link>
                </Grid>
                <Grid item lg={1}>
                    
                    <Link
                        href='https://github.com/mrbaummath'
                        sx={{mb:0.5 }}
                    >
                        <Stack direction='row' spacing={1} alignItems='center'>
                        
                        <GitHubIcon />
                        <span>GitHub</span>
                        </Stack>
                    </Link>
                </Grid>
                <Grid item lg={1}>
                    
                    <Link
                        href='mailto:baum1286@gmail.com'
                        sx={{mb:0.5 }}
                    >
                        <Stack direction='row' spacing={1} alignItems='center'>
                        
                        <AlternateEmailIcon />
                        <span>baum1286@gmail.com</span>
                        </Stack>
                    </Link>
                </Grid>
                
            </Grid>

        </Container>
    )
}

export default Social