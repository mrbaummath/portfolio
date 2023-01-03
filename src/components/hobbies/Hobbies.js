import { Box, Card, Typography, CardMedia, CardContent, Grid, Container, List, ListItem, Link } from '@mui/material'

const Hobbies = () => {
    return(
        <Container sx= {{ width: '100vw'}} maxWidth='100vw'>
            <Grid container sx={{width:'100%'}} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' sx={{mb:'10px'}}>
                        Other Projects/Interests
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <Box sx={{width:'100%'}}>
                            <CardContent sx={{ flex: '1 0 auto', width:'90%'}}>
                                <Typography variant='h4'>
                                    Desmos Activities and Graphs
                                </Typography>
                                <Typography variant='subtitle1' align='justify'>
                                    As a math teacher, I found Desmos to be be a powerful tool in helping me create student-centered content. Below is a sample of activities/graphs I made for students as well as a couple of constructions I made for fun.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Link href='https://www.desmos.com/calculator/oioy5blhuz' target='_blank'>
                                            Cantor Set Visualization
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href='https://www.desmos.com/calculator/byqysz6ftx' target='_blank'>
                                            Alpha/Beta/Power Visualization
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href='https://teacher.desmos.com/activitybuilder/custom/5e21b1fac264160c9d74352b' target='_blank'>
                                            Conics and Eccentricity Activity
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href='https://teacher.desmos.com/activitybuilder/custom/5c9ec51466073c306cb0a42a' target='_blank'>
                                            Cycloids Activity
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href='https://mrbaummath.github.io/limit-demo/' target='_blank'>
                                            Sequence Limit Demo
                                        </Link>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                        <Box sx={{width:'100%'}}>
                            <CardContent sx={{flex:'1 0 auto', width:'90%'}}>
                                <Typography variant='h4'>
                                    Other media/hobbies
                                </Typography>
                                <Typography variant='subtitle1' align='justify'>
                                    I love puzzles &mdash; crosswords, Ken Ken, Two Not Touch &mdash; and try to do at least the NYT crossword on a daily basis. Over the course of my summers as a teacher I've taken breaks from coursework to write stageplays. When I need a bit of a math fix I go over to math tok and occasionally post some <Link href='https://www.tiktok.com/@mrbaummath'>videos of my own.</Link> (For whatever reason, this particular platform is obsessed with 'debunking' the Monty Hall problem and trying to argue that 0.9999... is not equal to 1).
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Hobbies