import React from "react";
import'./Product.css';



const Product = (props)=>{
    
    const{img,name,details,age,time}=props.product;



   
   
    return (
        <div className="product"> 
            <img src={img} alt=""></img>
            <div className="product-name">
            <h3>{name}</h3>
            <p>{details}</p>
            <p><small>{age}</small></p>
            <h4>{time}m</h4>
            <button onClick={()=>props.addToHandle({time})}>Add to list</button>
            </div>
            
        </div>
           
        );
};

export default Product;