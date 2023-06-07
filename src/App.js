function App(){
    const butonaTikla = () => {
        console.log('Butona Tıklandı');
    };

    return  <div>
                <button onClick={butonaTikla}>Hayvan Ekle</button>
            </div>
}

export default App;