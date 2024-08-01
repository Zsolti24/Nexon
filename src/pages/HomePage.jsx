import React, { useState, useEffect } from 'react'
import Scomponent from "../components/SliderComponent"
// import { google } from 'googleapis'
// import { google } from 'google-auth-library';

import axios from 'axios';

export default function HomePage() {
    
    // async function getServerSideProps(){
        
    //     const auth = await google.auth.getClient({ scopes:['https://www.googleapis.com/auth/spreadsheets.readonly'] })
    //     const sheets = google.sheets({ version: 'v4', auth});
    //     const range = `Sheet1!A5`;
        
    //     const response = await sheets.spreadsheets.values.get({
    //         spreadsheetId: process.env.SHEET_ID,
    //         range,
    //     })
        
    //     console.log(response.data.values);
    // }
    // async function updateCell() {
        // const { AuthClient } = require('google-auth-library');

        // const auth = await google.auth.getClient({ scopes:['https://www.googleapis.com/auth/spreadsheets.readonly'] })
        // const sheets = google.sheets({ version: 'v4', auth});

        // const { id } = querry;
        // const range = 'Sheet1!A6';

        // const response = await sheets.spreadsheets.values.get({
        //     spreadsheetId: process.env.SHEET_ID,
        //     range,
        // });
        // const [title, content] = response.data.values[0];
        // console.log(title);
    // }

    // const axios = require('axios');
    // const { google } = require('googleapis');

    // async function updateCell() {
    //     const auth = await google.auth.getClient({ scopes:['https://www.googleapis.com/auth/spreadsheets.readonly'] })
    //     try {
    //       const client = await auth.getClient();
    //       const sheets = google.sheets({ version: 'v4', auth: client });
      
    //       const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
    //       const range = 'Sheet1!A6'; // Assuming you want to update cell A6 on Sheet1
    //       const valueInputOption = 'USER_ENTERED';
      
    //       const request = {
    //         spreadsheetId: spreadsheetId,
    //         range: range,
    //         valueInputOption: valueInputOption,
    //         resource: {
    //           values: [['New Value']], // Replace 'New Value' with the data you want to insert
    //         },
    //       };
      
    //       const response = await sheets.spreadsheets.values.update(request);
    //       console.log('Cell updated:', response.data);
    //     } catch (error) {
    //       console.error('Error updating cell:', error);
    //     }
    //   }



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

    const [names, setNames] = useState(["AUTIZMUS ALAPÍTVÁNY","LÁMPÁS `92 ALAPÍTVÁNY","NOÉ ÁLLATOTTHON ALAPÍTVÁNY","SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY"]);
    const [foundationDescription, setfoundationDescription] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec volutpat magna. Etiam ut felis enim. Etiam id nisi quis magna pulvinar tempus. Aliquam pellentesque lacus nunc, sed viverra quam sagittis a. Etiam quis accumsan neque. Pellentesque condimentum est hendrerit, lacinia metus ut, rhoncus metus. Aenean lobortis suscipit cursus. Aenean elit magna, lobortis ac ligula auctor, mollis suscipit sapien. Praesent nec tempor diam.In fringilla pulvinar aliquam. Mauris vel risus id orci pellentesque consectetur. Ut rhoncus tortor elit, vitae hendrerit neque sodales sed. Mauris placerat id nulla nec suscipit. Sed imperdiet risus id faucibus hendrerit. Integer ac tortor dui. Nulla posuere massa lacus, ut vehicula nibh rutrum eu. Aenean eu justo ac ligula convallis molestie. Ut neque tortor, tincidunt a luctus et, faucibus in felis. Aliquam vel nunc et sem consequat rhoncus sed nec justo. Suspendisse hendrerit, arcu tincidunt tincidunt auctor, ipsum urna vulputate eros, ac tempor magna tortor id ante. Vivamus eu rutrum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius turpis ac odio mollis, non convallis mauris feugiat.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec volutpat magna. Etiam ut felis enim. Etiam id nisi quis magna pulvinar tempus. Aliquam pellentesque lacus nunc, sed viverra quam sagittis a. Etiam quis accumsan neque. Pellentesque condimentum est hendrerit, lacinia metus ut, rhoncus metus. Aenean lobortis suscipit cursus. Aenean elit magna, lobortis ac ligula auctor, mollis suscipit sapien. Praesent nec tempor diam.In fringilla pulvinar aliquam. Mauris vel risus id orci pellentesque consectetur. Ut rhoncus tortor elit, vitae hendrerit neque sodales sed. Mauris placerat id nulla nec suscipit. Sed imperdiet risus id faucibus hendrerit. Integer ac tortor dui. Nulla posuere massa lacus, ut vehicula nibh rutrum eu. Aenean eu justo ac ligula convallis molestie. Ut neque tortor, tincidunt a luctus et, faucibus in felis. Aliquam vel nunc et sem consequat rhoncus sed nec justo. Suspendisse hendrerit, arcu tincidunt tincidunt auctor, ipsum urna vulputate eros, ac tempor magna tortor id ante. Vivamus eu rutrum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius turpis ac odio mollis, non convallis mauris feugiat.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec volutpat magna. Etiam ut felis enim. Etiam id nisi quis magna pulvinar tempus. Aliquam pellentesque lacus nunc, sed viverra quam sagittis a. Etiam quis accumsan neque. Pellentesque condimentum est hendrerit, lacinia metus ut, rhoncus metus. Aenean lobortis suscipit cursus. Aenean elit magna, lobortis ac ligula auctor, mollis suscipit sapien. Praesent nec tempor diam.In fringilla pulvinar aliquam. Mauris vel risus id orci pellentesque consectetur. Ut rhoncus tortor elit, vitae hendrerit neque sodales sed. Mauris placerat id nulla nec suscipit. Sed imperdiet risus id faucibus hendrerit. Integer ac tortor dui. Nulla posuere massa lacus, ut vehicula nibh rutrum eu. Aenean eu justo ac ligula convallis molestie. Ut neque tortor, tincidunt a luctus et, faucibus in felis. Aliquam vel nunc et sem consequat rhoncus sed nec justo. Suspendisse hendrerit, arcu tincidunt tincidunt auctor, ipsum urna vulputate eros, ac tempor magna tortor id ante. Vivamus eu rutrum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius turpis ac odio mollis, non convallis mauris feugiat.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec volutpat magna. Etiam ut felis enim. Etiam id nisi quis magna pulvinar tempus. Aliquam pellentesque lacus nunc, sed viverra quam sagittis a. Etiam quis accumsan neque. Pellentesque condimentum est hendrerit, lacinia metus ut, rhoncus metus. Aenean lobortis suscipit cursus. Aenean elit magna, lobortis ac ligula auctor, mollis suscipit sapien. Praesent nec tempor diam.In fringilla pulvinar aliquam. Mauris vel risus id orci pellentesque consectetur. Ut rhoncus tortor elit, vitae hendrerit neque sodales sed. Mauris placerat id nulla nec suscipit. Sed imperdiet risus id faucibus hendrerit. Integer ac tortor dui. Nulla posuere massa lacus, ut vehicula nibh rutrum eu. Aenean eu justo ac ligula convallis molestie. Ut neque tortor, tincidunt a luctus et, faucibus in felis. Aliquam vel nunc et sem consequat rhoncus sed nec justo. Suspendisse hendrerit, arcu tincidunt tincidunt auctor, ipsum urna vulputate eros, ac tempor magna tortor id ante. Vivamus eu rutrum diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius turpis ac odio mollis, non convallis mauris feugiat."]);

  return (
    <>
        <div className="homePage">
            <div className="pageTitle">
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
            <div className="endButtons">
                <div className="resetBtn" onClick={handleReset}>VISSZÁLLÍTÁS</div>
                <div className={sum === 3000000 ? "sendBtn sendable" : "sendBtn" }>ELKÜLDÖM</div>
            </div>
        </div>
        <div className="bImgContainer">
            <img src='../images/bg.png' alt="img" className='bImg'/>
        </div>
    </>
  )
}
