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

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function TrackFalseSlider() {
    
  return (
    <Box sx={{ width: 250 }}>
    
      <Separator />
      <Typography id="track-false-range-slider" gutterBottom>
        Removed track range slider
      </Typography>
      <Slider
  
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[20, 37, 50]}
        marks={marks}
        sx={{
            // Styling the track
            '& .MuiSlider-track': {
              background: 'linear-gradient(to right, #ff5733 10%, #ffbd69 90%)',
              height: '6px', // Track height
              borderRadius: '3px', // Track rounded corners
            },
            // Styling the thumb (both min and max)
            '& .MuiSlider-thumb': {
              backgroundColor: 'transparent', // Make both thumbs transparent
              width: 20, // Thumb width
              height: 20, // Thumb height
              borderRadius: '50%', // Thumb shape
              boxShadow: 'none', // Remove shadow (optional)
              border: '2px solid #ff5733', // Optional: add border to highlight thumbs (change color as needed)
            }
            
          }}
      />
    </Box>
  );
}