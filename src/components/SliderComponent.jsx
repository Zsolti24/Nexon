import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import { MAX,MIN,step } from '../constans/constans';


import sled from '../../public/images/sled.png';


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

export default function SliderComponent({ index, money, setValue, name, foundationDescription, sum}) {
  const [popUpClicked, setPopUpClicked] = useState(false);
  const [val, setVal] = useState(MIN);

  useEffect(() => {
    setVal(money[index]);
  }, [money]);

  const handlePop = () =>{
    setPopUpClicked(true);
  }  
  const closePop = () =>{
    setPopUpClicked(false);
  }


  const handleChange = (_, newValue) => {
    if(!(sum == 3000000 && newValue>val) ){
      setVal(newValue);
      setValue((prevItems) => {
        const newItems = [...prevItems];
        newItems[index] = newValue;
        return newItems;
      });
    }
  };


  return (
    <div className='SliderElement'>
      <div className="moneyShow">
        { val == 0 ? "0" : val} Ft
      </div>
      <Box sx={{ width: '82%', marginLeft:'9%'}}>
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
              WebkitTapHighlightColor:'none',
              overflow:"visible",
              backgroundColor: 'transparent',
              backgroundImage: `url('../../public/images/sled.png')`, 
              backgroundSize: 'cover',
              width: {
                xs: 60,
                sm: 80,
                lg: 155,
            },
              height: {
                xs: 35,
                sm: 45,
                lg: 90,
            },
              borderRadius: 0,
              position:'relative',
              zIndex:10,
              border: 'none',
              boxShadow: 'none',
              '&:focus, &:active': {
                boxShadow: 'none',
              },
              '&:before': {
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
              height: 100,
              width: '110%',
              marginLeft:'-5%',
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
      <div className="trackImgContainer">
          <img src={`../../public/images/ho${index +1 }.png`} className='trackImg'/>
          <div className="onTrackPart">
            <img src={`../../public/images/infBtns.png`} className='infoButtons' onClick={handlePop}/>
            <div className="FName">{name}</div>
          </div>
        </div>
      <div className={popUpClicked ? "popUpDescription popUpDescriptionActive" : "popUpDescription"}>
        <div className="xbutton" onClick={closePop}>
          <img src="../../public/images/xIcon.png" alt="" className='xbtn'/>
        </div>
          <div className="foundName">{name}</div>
          <div className="foundDesc">{foundationDescription}</div>
      </div>
    </div>
  );
}
