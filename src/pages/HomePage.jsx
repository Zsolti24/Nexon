import React, { useState } from 'react'
import Slider from '../components/Slider'

export default function HomePage() {

    const [value, setValue] = useState([0, 2, 5, 0]);

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
                    <Slider key={i} index={i} value={value} setValue={setValue} name={names[i]} foundationDescription={foundationDescription[i]}/>
                ))}

                {value[0]}
                {value[1]}
                {value[2]}
                {value[3]}
            </div>
        </div>
        <div className="bImgContainer">
            <img src='../images/bg.png' alt="img" className='bImg'/>
        </div>
    </>
  )
}
