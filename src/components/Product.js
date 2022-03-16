import React, { Component } from 'react';

class Product extends Component {
  render() {
    const {img, title, about, price, poy} = this.props
      return (
        <div className='box'>
					<div className="cards">
            <div className="card-img">
              <img src={img} alt="pepsi" />
							<span>{poy}</span>
          </div>
					 <h1>{title}</h1>
					 <p>{about}</p>
					 <h2>${price}</h2>
					 <button className='btn'>VIEW PRODUCT</button>
					</div> 
       </div>
        );
    }
}

export default Product;
