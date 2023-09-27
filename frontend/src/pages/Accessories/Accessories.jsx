import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Await, useLoaderData } from "react-router-dom";
import "./Accessories.css"
import { Card } from "react-bootstrap";

const Home = () => {
  const [services, setServices] = useState([]);
  const { result } = useLoaderData();
  // useEffect(() => {}, []);
  return (
    <div>
      <Suspense fallback={<>loading......</>}>
        <Await resolve={result} errorElement={<>error .....</>}>
          {
          (result) => {
            

            return(
            <div>
              {/* Your order is : ghaseel sayara w sho bedak tdef 3leh */}
            <div className="accessoryCardAll">
{result.map((accessory) => {
  return (<Card className='accessoryCard' style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {accessory.img} />
  <Card.Body>
    <Card.Title>{accessory.name}</Card.Title>
    <Card.Text>
      Price : {accessory.price} JD
    </Card.Text>
     <BsCartPlus className='addtocart' onClick={()=>{}}/>                </Card.Body>
</Card>)
            })};
            
          </div>
            </div>
            ) 
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export const accessoriesLoader = async () => {
  const result = axios.get("http://localhost:5000/accessories").then((result) => {
    return result.data.result;
  });
  // console.log(result.data.services);
  return { result };
};
export default Home;
