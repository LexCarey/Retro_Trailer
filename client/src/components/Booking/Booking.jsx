import React from 'react'
import './Booking.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
    {
        url: require("./all_imgs/pic1.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic2.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic3.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic4.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic5.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic6.png"),
        title: 'Book Now!',
        width: '100%',
    },
    {
        url: require("./all_imgs/pic7.png"),
        title: 'Book Now!',
        width: '100%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '80vh',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: '70vh',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
        opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
        opacity: 0,
        },
        '& .MuiTypography-root': {
        border: '4px solid currentColor',
        },
    },
    }));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50',
    color: 'rgb(255, 252, 241)',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const Booking = () => {
    return (
        <div className='booking' id='home'>
            <div className='carousel-div'>
            <Carousel>
            {images.map((image) => (
            <Carousel.Item>
                <a target="_blank" href="https://www.peerspace.com/pages/listings/630084f18cb523000eb22104">
                <ImageButton
                focusRipple
                key={image.title}
                style={{
                    width: image.width,
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    <h2>{image.title}</h2>
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
                </a>
            </Carousel.Item>
        ))}
            </Carousel>
            </div>
        </div>
    )
}

export default Booking
