import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Marker from './marker';

const Separator = styled('div')(
    ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);



function valuetext(value: number) {
    return `${value}°C`;
}

interface TrackFalseSliderProps {
    value1: number;
    value2: number;
    value3: number;
}


export default function Myslider({ value1, value2, value3 }: TrackFalseSliderProps) {
    const values = [value1, value2, value3];
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: value2,
            label: `${value2}sec`,
        },

        {
            value: 60,
            label: '60',
        },
    ];

    return (
        <Box sx={{ width: 200 }}>
            <Slider
                aria-labelledby="track-false-range-slider"
                getAriaValueText={valuetext}
                defaultValue={values}
                marks={marks}
                min={0}
                max={60}
                valueLabelDisplay="auto"
                slotProps={{
                    thumb: ({ value }) => ({
                        sx: {
                            backgroundColor: 'transparent',
                            height: 0,
                            width: 0,
                            border: 'none',
                            boxShadow: 'none',
                            visibility: 'hidden',
                        },
                    }),
                }}
                sx={{
                    '& .MuiSlider-track': {
                        background: 'linear-gradient(to right, #4caf50 10%, #f44336 100%)', // Green to Red gradient
                        height: '18px',
                        borderRadius: '20px',
                        borderColor: 'transparent',
                        position: 'relative',
                        top: '50%',
                        transform: 'translateY(-50%)',


                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'white',
                        height: '24px',
                        borderRadius: '20px',
                        borderTop: '2px solid rgba(0, 0, 0, 0.3)',
                        borderLeft: '2px solid rgba(0, 0, 0, 0.3)',


                    },
                    '& .MuiSlider-active': {
                        color: "black"
                    },
                  
                    '& .MuiSlider-mark': {
                        display: 'none',
                    },
                    '& .MuiSlider-markLabel': {
                        color: 'rgb(143, 144, 145)',
                        fontWeight: '600',
                    },
                }}
            />
             <Box
    sx={{
        position: 'relative', // Ensures this container is positioned within its parent
        height: '100px', // Make sure the parent has a height (adjust as needed)
    }}
>
    <Box
        sx={{
            position: 'absolute', // Position the marker inside its relative parent
            top: '-40%',  // Adjust the top position
            left: `calc(${(value2 / 60) * 100}% - 4px)`,  // Move the marker based on value2
            transform: 'translateY(-50%)',  // Keep the marker centered vertically if needed
        }}
    >
        <Marker />
    </Box>
</Box>

        </Box>
    );
}