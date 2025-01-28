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
        <Box sx={{ width: 250 }}>
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
                            backgroundColor: 'transparent',  // Make thumb invisible
                            height: 0,
                            width: 0,
                            border: 'none',
                            boxShadow: 'none',
                            visibility: 'hidden',  // Keep thumb hidden
                        },
                    }),
                }}
                sx={{
                    // Styling the track to have the gradient from green to red
                    '& .MuiSlider-track': {
                        background: 'linear-gradient(to right, #4caf50 10%, #f44336 100%)', // Green to Red gradient
                        height: '6px',
                        borderRadius: '3px',
                    },
                    // Styling the rail (background behind the track) to be white
                    '& .MuiSlider-rail': {
                        backgroundColor: 'white',  // White background for the rail
                        height: '6px',
                        borderRadius: '3px',

                    },
                    '& .MuiSlider-active': {
                        color: "black"
                    },
                    // Optional: Adding a vertical line at the 50 mark
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        left: `calc(${(value2 / 60) * 100}% - 1px)`,  // Adjust vertical line based on value2
                        width: "2px",
                        backgroundColor: '#333',  // Vertical line color
                    },
                }}
            />
        </Box>
    );
}