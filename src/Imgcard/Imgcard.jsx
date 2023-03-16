import React from 'react'
import { APIdata } from '../Data/Data';
import Card from '../Card/Card';
import "./Imgcard.css";
const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=ywwK2E7QIUaWuUpKNFrSg8j14WLj7THEKKPIURWg";

const Imgcard = () => {
  return (
    <div className="Cards" >
       
      {APIdata.map((card, id) => {
        return (  
          <div className="parentContainer" key={id}
          >
            <Card
              img_src={card.img_src}
              name={card.rover.name}
              earth_date={card.earth_date}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Imgcard
