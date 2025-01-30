import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';



interface ProgressBarProps {
    color1: string;  
    color2: string;  
    progress: number;
}
  
  export default function ProgressBar({ color1, color2, progress}: ProgressBarProps) {
    return (
        <Box sx={{ position: 'relative', width: 50, height: 36 }}>
          <CircularProgress
          variant="determinate"
          value={100}
        
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: color2,
            }}
          />
          <CircularProgress
          variant="determinate"
          value={progress}
    
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: color1, 
            }}
          />
        </Box>
      );
 
}