import React, { useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    //set state for tabs
    const [current, setCurrent] = useState('home')
    const navigate = useNavigate()

    const handleTabChange = (event, newTab) => {
        setCurrent(newTab)
    }

    const inStyle = { width : '100%', mb:2 }

    return(
        <Box sx={ inStyle }>
            <Tabs
                value={current}
                onChange={handleTabChange}
                textColor='secondary'
                indicatorColor='secondary'
                aria-label='navigation tabs'
            >
                <Tab value='home' label='Home/About Me/Contact' onClick={()=>{navigate('/')}} />
                <Tab value='projects' label='Dev Projects' onClick={()=>{navigate('projects')}} />
                <Tab value='social' label='Social' />
                <Tab value='resume' label='Resume' />



            </Tabs>
        </Box>
    )
}

export default Navbar