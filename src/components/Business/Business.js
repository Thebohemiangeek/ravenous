import React from 'react';
import './Business.css';
const business = { imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90} ;

class Bussiness extends React.Component {

    render (){
        return <div className="Business">
        <div className="image-container">
          <img src={business.this.imageSrc} alt=''/>
        </div>
        <h2>{business.this.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.this.address}</p>
            <p>{business.this.city}</p>
            <p>{business.this.state} {business.this.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.this.category}</h3>
            <h3 className="rating">{bussiness.this.rating}</h3>
            <p>{business.this.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    }

};


export default business;