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
                <Tab value='home' label='About Me' onClick={()=>{navigate('/')}} />
                <Tab value='projects' label='Dev Projects' onClick={()=>{navigate('projects')}} />
                <Tab value='resume' label='Resume' onClick={()=>{navigate('resume')}}/>
                <Tab value='hobbies' label='Hobbies/Side Projects' onClick={()=>{navigate('hobbies')}} />



            </Tabs>
        </Box>
    )
}

export default Navbar