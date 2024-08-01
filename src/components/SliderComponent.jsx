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

export default function SliderComponent({ index, money, setValue, name, foundationDescription }) {
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
      <div className="moneyShow">
        { val == 0 ? "0" : val} Ft
      </div>
      <Box sx={{ width: '100%' }}>
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
              width: 200,
              height: 100,
              borderRadius: 0,
              position:'relative',
              zIndex:10,
              border: 'none',
              boxShadow: 'none',
              '&:focus, &:active': {
                boxShadow: 'none',
              },
              '&:hover': {
                boxShadow: 'none',
              },
            },
            '& .MuiSlider-track': {
              opacity: 0,
            },
            '& .MuiSlider-rail': {
              height: 150,
              width: '100%',
             backgroundColor: 'transparent',
            },
          }}
        />
        <div className="trackImgContainer">
          <img src={`../../public/images/ho${index +1 }.png`} className='trackImg'/>
          <div className="onTrackPart">
            <img src={`../../public/images/infBtns.png`} className='infoButtons'/>
            <div className="FName">{name}</div>
          </div>
        </div>
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
