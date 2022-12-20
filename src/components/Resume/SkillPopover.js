import React, {useState} from 'react'
import { Popover, Typography, Box } from '@mui/material'

const SkillPopover = ({content, anchorEl, handleClose}) => {
    const open = Boolean(anchorEl)
    if (content) {
    return(
        <Popover
            id='skill-popover'
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
                <Box sx= {{display:'flex', padding:1, flexDirection:'column'}}>
                <Typography variant='subtitle2'>
                    {content.text}
                </Typography>
                <Typography variant='subtitle2'>
                    {content.credit}
                </Typography>
            </Box>
        </Popover>
    )
        } else {
            return (<></>)
        }
}

export default SkillPopover