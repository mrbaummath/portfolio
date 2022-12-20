import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Button, Divider, ImageList, ImageListItem, Box, SvgIcon } from '@mui/material'
import SkillPopover from './SkillPopover'


const Resume = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [popoverContent, setPopoverContent] = useState(null)
    const handleDownload = () => {
        fetch('baum-current-resume.pdf')
            .then(res => {
                res.blob()
                    .then(blob => {
                        const fileURL = window.URL.createObjectURL(blob)
                        let alink = document.createElement('a')
                        alink.href = fileURL
                        alink.download = 'baum-current-resume.pdf'
                        alink.click()
                    })
            })
    }

    const dividerStyle = {
        width: '100%',
        background: '#c596d4'
    }

    const handleOpenPopover = (event) => {
        switch (event.currentTarget.id) {
            case 'python':
                setPopoverContent(pythonSkills)
                break
            case 'js':
                setPopoverContent(jsSkills)
                break
            case 'html':
                setPopoverContent(htmlSkills)
                break
            case 'css':
                setPopoverContent(cssSkills)
                break
            case 'ga':
                setPopoverContent(gaDescription)
                break
            case 'tc':
                setPopoverContent(tcDescription)
                break
            case 'nyu':
                setPopoverContent(nyuDescription)
                break
            case 'nu':
                setPopoverContent(nuDescription)
                break
            default:
                setPopoverContent(null)
        }
        setAnchorEl(event.currentTarget)
    }

    const handleClosePopover = () => {
        setAnchorEl(null)
        setPopoverContent(null)
    }

    const pythonSkills = {text:'Django || Django REST || Pandas || Jupyter notebooks', credit: '(Icon by Icon Mafia)'}
    const jsSkills = {text: 'Node || Express || Mongoose || Liquid Express || React', credit: '(Icon by Icon 54)'}
    const htmlSkills = {text:'', credit:'(Icon by Icon Mafia)'}
    const cssSkills = {text:'', credit:'(Icon by Icon Mafia)'}
    const gaDescription = {text:'General Assembly || Software Engineering Immersive Program || December, 2022', credit:''}
    const tcDescription = {text: 'Teachers College at Columbia University || MA, Math Education || February, 2015', credit:''}
    const nyuDescription = {text: 'NYU School of Law || J.D. || May, 2012', credit:''}
    const nuDescription ={text: 'Northwestern University || B.A., cum laude, English || June, 2009', credit:''}

    return(
        <Grid container sx= {{padding: '15px'}} spacing={1}>
            <Grid item sm={12}>
                <Typography variant='h3'>
                    My Skills and Experiences at a Glance
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant='subtitle1'>
                    (download full resume<Button onClick={handleDownload}>here</Button>)
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Divider sx= {dividerStyle} />
            </Grid>
            <Grid item sm={12}>
                <Typography variant='h5'>
                    Development Knowledgebase
                </Typography>
            </Grid>
            
                      
                
            <Grid item sm={4}>
                <ImageList cols={4} sx={{height:100}}>
                    <img id='python' src={require('../../assets/icons/python1.png')} onClick={handleOpenPopover} style={{cursor:'pointer'}}/>
                    <img id='js' src={require('../../assets/icons/javascript.png')} onClick={handleOpenPopover} style={{cursor:'pointer'}}/>
                    <img id='html' src={require('../../assets/icons/html.png')} onClick={handleOpenPopover} style={{cursor:'pointer'}} />
                    <img id='css' src={require('../../assets/icons/css3.png')} onClick={handleOpenPopover} style={{cursor:'pointer'}} />
                </ImageList>
            </Grid>    
            <Grid item sm={12}>
                <Divider sx={dividerStyle} />
            </Grid>
            <Grid item sm={12}>
                <Typography variant='h5'>
                    Education
                </Typography>
            </Grid>
            <Grid item sm={4}>
                <ImageList cols={4} rowHeight={50} >
                    <ImageListItem key='ga' >
                        <Box sx={{display:'flex', height:'100%', width:'100%'}}>
                            <img id='ga' src={require('../../assets/icons/ga.png')} onClick={handleOpenPopover} style={{cursor:'pointer', objectFit:'scale-down'}} />
                        </Box>
                    </ImageListItem>
                    <ImageListItem key='tc' >
                        <Box sx={{display:'flex', height:'100%', width:'100%'}}>
                            <img id='tc' src={require('../../assets/icons/columbia.png')} onClick={handleOpenPopover} style={{cursor:'pointer', objectFit:'scale-down'}} />
                        </Box>
                    </ImageListItem>
                    <ImageListItem key='nyu' >
                        <Box sx={{display:'flex', height:'100%', width:'100%'}}>
                            <img id='nyu' src={require('../../assets/icons/nyu.png')} onClick={handleOpenPopover} style={{cursor:'pointer', objectFit:'scale-down'}} />
                        </Box>
                    </ImageListItem>
                    <ImageListItem key='nu' >
                        <Box sx={{display:'flex', height:'100%', width:'100%'}}>
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" height="234.01" viewBox="0 0 152 234.01286" width="152" fontSize='large' id='nu' sx={{cursor:'pointer'}} onClick={handleOpenPopover}>
                            <g transform="matrix(1.25 0 0 -1.25 -339.55 573.75)"><g transform="matrix(4.2615 0 0 4.2615 -1081 -1188.1)"><path d="m345.72 386.37h-0.971-9.339-0.971v-0.971-5.543-0.267l0.137-0.23 6.043-10.152v-8.46l-14.809 25.145-0.281 0.478h-0.555-6.442-0.971v-0.971-41.613-0.971h0.971 9.338 0.971v0.971 5.544 0.267l-0.136 0.229-6.043 10.152v8.46l14.808-25.145 0.282-0.478h0.555 6.442 0.971v0.971 41.613 0.971zm-0.971-0.971v-41.613h-6.442l-16.616 28.214v-12.289l6.179-10.381v-5.544h-9.338v41.613h6.442l16.616-28.214v12.289l-6.18 10.382v5.543h9.339z" fill="#fff"/><g fill="#59118e"><path d="m335.41 385.4v-5.543l6.18-10.382v-12.289l-16.617 28.214h-6.441v-41.613h9.338v5.544l-6.179 10.381v12.289l16.616-28.214h6.442v41.613h-9.339z"/><path d="m335.41 385.4v-5.543l6.18-10.382v-12.289l-16.617 28.214h-6.441v-41.613h9.338v5.544l-6.179 10.381v12.289l16.616-28.214h6.442v41.613h-9.339z"/></g></g></g>
                            </SvgIcon>
                        </Box>
                    </ImageListItem>
                </ImageList>
            </Grid>
            <SkillPopover content={popoverContent} anchorEl={anchorEl} handleClose={handleClosePopover} />
        </Grid>
    )
}

export default Resume