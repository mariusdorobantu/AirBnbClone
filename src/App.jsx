import React from 'react';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import data from './data';

function App() {
    
    const cards = data.map(item => {
        return (
            <Footer 
                key={item.id}
                item={item}
            />
        )
    })
        
    return (
        <>
            <NavBar />
            <Header />
            {cards}
        </>

    )
}

export default App;