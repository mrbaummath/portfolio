import React from 'react'
import { Modal, Box } from '@mui/material'

const CastModal = ({cast, open, handleClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <video width='90%' controls>
                    <source src={cast} type='video/mp4' />
                </video>
            </Box>


        </Modal>
    )
}

export default CastModal