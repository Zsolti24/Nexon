import React, { useState, useEffect } from 'react'
import Scomponent from "../components/SliderComponent"
import axios from 'axios';
import EventEmitter from 'eventemitter3';
import { TRUE } from 'sass';
import { spreadsheetId, range, fetchLink, SheetLink, names, foundationDescription, MAX } from '../constans/constans';

const emitter = new EventEmitter();


export default function HomePage() {
  

    const [data, setData] = useState(null);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        
        const storedData = getFromLocalStorage('myKey');
        if (storedData) {
          setData(storedData);
        }    
      }, []);

      
      const handleSave = (val) => {
        saveToLocalStorage('myKey', val, 10);
        setData(val);
      };




      const [readdata, setreaddata] = useState([]);
      const [error, setError] = useState(null);
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(fetchLink);
            const text = await response.text();
            const jsonData = JSON.parse(text.substr(47).slice(0, -2));
            const rows = jsonData.table.rows.map(row => row.c.map(cell => cell ? cell.v : ''));
            setreaddata(rows);
          } catch (err) {
            setError('Error fetching data');
            console.error(err);
          }
        };
        
        fetchData();
      }, [spreadsheetId, range]);

      const [nextIndeex, setNextIndeex] = useState(10);

      const [ipAddress, setIpAddress] = useState('');

      const tellTheIndex = () => {
        var len = readdata.length + 1;
        setNextIndeex(len);
      }
      
      const fetchIpAddress = async () => {
        try {
          const response = await axios.get('https://api.ipify.org?format=json');
          setIpAddress(response.data.ip);
        } catch (error) {
          console.error('Error fetching IP address:', error);
        }
      };
      
      fetchIpAddress();
      
      const handleUpdateCell = async () => {
        tellTheIndex();
        const now = new Date();
        fetchIpAddress();
        tellTheIndex();
          const response = await axios.get(`${SheetLink}?action=setValue&id=${readdata.length}&ip=${ipAddress}&time=${now.toISOString()}&fou1=${money[0]}&fou2=${money[1]}&fou3=${money[2]}&fou4=${money[3]}&row=${readdata.length + 1}`);
        };
      



    function checkExpiry(){
        const now = new Date().getTime();
        const itemStr = localStorage.getItem('myKey');
        if (itemStr) {
          const item = JSON.parse(itemStr);
          if (now > item.expiry) {
            setExpired(true);
            setData(null);
            localStorage.removeItem('myKey'); 
            return {value: true};
          } else {
            setData(item.value);
            setExpired(false);
            return {value: false};
          }
        } else {
          setData(null);
          return {value: false};
        }
      };
    const [money, setValue] = useState([0, 0, 0, 0]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const totalSum = money.reduce((acc, num) => acc + num, 0);
        setSum(totalSum);
      }, [money]);

    const handleReset = () => {
        setValue((prevItems) => {
          const newItems = [0,0,0,0]
          return newItems;
        });
    }

  const [sentText, setSentText] = useState("Sikeresen elküldte");

    const [sentAppear, setSentAppear] = useState(false);
    const sent = () => {
      if(sum === MAX){
        const temp = checkExpiry();
        if(sentAppear==false && data==true && temp.value==false){
            setSentAppear(true);
            setSentText("Várnod kell a következő küldésig.");
        }
        else if(sentAppear==false && sum === MAX){
            handleUpdateCell();
            setSentText("Sikeresen elküldte");
            setSentAppear(true);
            handleSave(true);
        }
    }
  }
    const closePop = () => {
         setSentAppear(false);
    }

  return (
    <>
        <div className="entire">
            <div className="homePage">
                <div className="pageTitle" onClick={handleUpdateCell}>
                    AZ AJÁNDÉK KÖZÖS
                </div>
                <div className="buttonText">
                    Döntsünk róla együtt
                </div>
                <div className="description">
                    A szánkópályán minden beosztás 250 ezer forintot jelent. Húzza a szánkót aszerint, ahogyan Ön osztaná el az adományt az alapítványok között. A kiválasztott arányokat végül egyesítjük, s ennek megfelelően osztjuk szét a felajánlott összeget a négy szervezet között. Miután végzett, az "Elküldöm" gombra kattintva véglegesítse döntését.
                </div>
                <div className="slidersContainer">

                    {names.map((name, i) => (
                        <Scomponent key={i} 
                        index={i} money={money} 
                        setValue={setValue} name={name} 
                        foundationDescription={foundationDescription[i]}
                        sum = {sum}
                        />
                    ))}
                </div>
                <div className="sendButtons">
                    <div className="resetBtn" onClick={handleReset}>VISSZÁLLÍTÁS</div>
                    <div className={sum === MAX ? "sendBtn sendable" : "sendBtn" } onClick={sent}>ELKÜLDÖM</div>
                </div>
            </div>
            <div className="bImgContainer">
                <img src='../images/bg.png' alt="img" className='bImg'/>
            </div>
        </div>
        <div className={sentAppear ? "popSent popSentActive" : "popSent"}>
            {sentText}
            <div className="xbutton" onClick={closePop}>
                <img src="../../public/images/xIcon.png" alt="" className='xbtn'/>
            </div>
        </div>
    </>
  )
};

const saveToLocalStorage = (key, value, ttl) => {
    const now = new Date().getTime();
    const item = {
      value: value,
      expiry: now + ttl * 60000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  const getFromLocalStorage = (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  };