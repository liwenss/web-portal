import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

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
            label: `${value2} sec`,
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
                      
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'white', 
                        height: '18px',
                        borderRadius: '20px',
                        borderTop: '2px solid rgba(0, 0, 0, 0.3)', 
                        borderLeft: '2px solid rgba(0, 0, 0, 0.3)',
                       

                    },
                    '& .MuiSlider-active': {
                        color: "black"
                    },
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: `calc(${(value2 / 60) * 100}% - 1px)`,  
                        width: "2px",
                        backgroundColor: 'rgb(92, 0, 128)',  
                    },
                    '& .MuiSlider-mark': {
                        display: 'none', 
                    },
                }}
            />
        </Box>
    );
}