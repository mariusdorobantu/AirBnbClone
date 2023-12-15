import React from 'react';

function Header() {
    return (
            <>
                <div className="hero--img">
                    <img
                        className="img-grid"
                        src="./images/photo-grid.png"
                        alt="experience photo grid">
                    </img>
                </div>
                <header>
                    <h1>Online Experiences</h1>
                    <p>Join unique interactive activities 
                    led by one-of-a-kind hosts—all without 
                    leaving home.
                    </p>
                </header>
            </>
    )
}

export default Header;