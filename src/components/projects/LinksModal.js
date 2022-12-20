import React from 'react'
import { Modal, Box, List, ListItem, Link } from '@mui/material'

const LinksModal = ({links, open, handleClose}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        bgcolor: 'background.paper',
        border: '3px solid #c596d4',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        alignItems: 'center',
    }

    const linksJSX = links.map(link => (
        <ListItem>
            <Link href={link.href}>
                {link.title}
            </Link>
        </ListItem>
    ))

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <List>
                    {linksJSX}
                </List>
            </Box>

        </Modal>
    )
}

export default LinksModal