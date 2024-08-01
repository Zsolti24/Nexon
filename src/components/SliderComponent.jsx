import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import sled from '../../public/images/sled.png';

const MAX = 3000000;
const MIN = 0;
const step = 250000;

const marks = [
  {
    value: MIN,
    label: '', 
  },
  {
    value: MAX,
    label: '', 
  },
];

export default function SliderComponent({ index, money, setValue }) {
  const [val, setVal] = useState(MIN);

  const handleChange = (_, newValue) => {
    setVal(newValue);
    setValue((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = newValue;
      return newItems;
    });
  };


  return (
    <div className='SliderElement'>
      <Box sx={{ width: 1500 }}>
        <Slider
          marks={marks}
          step={step}
          value={val}
          min={MIN}
          max={MAX}
          onChange={handleChange}
          className='customSlider'
          sx={{
            '& .MuiSlider-thumb': {
              backgroundColor: 'transparent',
              backgroundImage: `url('../../public/images/sled.png')`, 
              backgroundSize: 'cover',
              width: 100,
              height: 50,
              borderRadius: 0,
              border: 'none',
              boxShadow: 'none',
              '&:focus, &:active': {
                boxShadow: 'none',
              },
            },
            '& .MuiSlider-track': {
              opacity: 0,
            },
            '& .MuiSlider-rail': {
              height: 50,
              backgroundImage: `url('../../public/images/ho1.png')`, // Path to your track image
              backgroundSize: 'cover',
              backgroundColor: 'transparent',
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer' }}
          >
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer' }}
          >
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
