import { useState } from "react";

function App(){
    const [count , setCount] = useState(0);


    const butonaTikla = () => {
        setCount(count+1);
    };

    return  <div>
                <button onClick={butonaTikla}>Hayvan Ekle</button>
                <div>Hayvan sayısı: {count}</div>
            </div>
}

export default App;