import React from 'react';

function Footer(props) {
    return (
            <div className="card--container">
              {props.item.openSpots === 0 && <div className="openSpots--status">SOLD OUT</div>}
              {props.item.location === 'Online' && <div className="location--status">ONLINE</div>}
                <img 
                    className="footer--img"
                    src={`./images/${props.item.coverImg}`}
                    alt="Picture over here">
                </img>

                <div className="footer--detailes">
                    <img
                        className="footer--star--img"
                        src="./images/star.png"
                        alt="footer--star--img">
                    </img>
                    <span>{props.item.stats.rating}</span>
                    <span className="grey--text">({props.item.stats.reviewCount})</span>
                    <span className="grey--text"> • {props.item.location}</span>
                </div>
                <p className="footer--text">{props.item.title}</p>
                <p className="footer--text"><span className="bold--price">From ${props.item.price}</span> / person</p>
            </div>
    )
}

export default Footer;