import { useState } from 'react';

function hayvanlarıGetir(){
    const hayvanlar = ['bird', 'cat', 'cow' , 'dog' , 'gator' ,'horse'];

    return hayvanlar[Math.floor(Math.random() * hayvanlar.length)];
}

function App(){
    const [hayvanlar,setHayvanlar] = useState([]);

    const butonaTikla = () => {
        
      setHayvanlar([...hayvanlar, hayvanlarıGetir()])
    };

    return  <div>
                <button onClick={butonaTikla}>Hayvan Ekle</button>
                <div>{hayvanlar}</div>
              
            </div>
}

export default App;