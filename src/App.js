import appCss from './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function hayvanlarıGetir(){
    const hayvanlar = ['bird', 'cat', 'cow' , 'dog' , 'gator' ,'horse'];

    return hayvanlar[Math.floor(Math.random() * hayvanlar.length)];
}

function App(){
    const [hayvanlar,setHayvanlar] = useState([]);

    const butonaTikla = () => {
        
      setHayvanlar([...hayvanlar, hayvanlarıGetir()])
    };
    const renderedHayvanlar = hayvanlar.map((hayvanlar,index) =>{
    return <AnimalShow type={hayvanlar} key={index} />;
    });

    return  <div className='app'>
                <button onClick={butonaTikla}>Hayvan Ekle</button>
                <div className='animal-list '>{renderedHayvanlar}</div>
              
            </div>
}

export default App;