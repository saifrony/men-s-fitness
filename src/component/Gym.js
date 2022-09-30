import React, { useEffect, useState } from 'react';
import'./Gym.css';
import Product from './Product';
import logo from '../img/2.svg';
import me from '../img/man.jpg';





const Gym =() =>{
    <img src={logo}/>
    const[products, setProducts] = useState([]);
    const[cart,setCart] = useState([]);
    useEffect (()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const addToHandle = (product) =>{
        

        const newCart=[...cart,product]
        setCart(newCart);
    }
    
  
    return(
        <div className='gym-container'>
             <div className='product-name'>
               <div className='dis'>
               <img src={logo} className='img'/>
                <h2>Men's Fitness</h2>
                </div>
                <h4>Select today’s exercise</h4>
            <div className='products-container'>
               
                {
                    products.map(product=><Product
                    product={product}
                    key={product.id}
                    addToHandle={addToHandle}
                    
                    ></Product>)
                }
            </div>
            </div>
            <div className='my-container'>
                
                <h2>Profile</h2>
                
                <img src={me} className='mr'/>
                
                <h3>S.I Rony</h3>
                <p>Narayanganj,Bangladesh</p>
                
                <div className='my-contain'>
                    <div className='my'>
                    <h3>80<small>kg</small></h3>
                    <p>Weight</p>
                    </div>
                    <div className='my'>
                    <h3>5.8</h3>
                    <p>Height</p>
                    </div>
                    <div className='my'>
                    <h3>25<small>yrs</small></h3>
                    <p>Age</p>
                    </div>
                </div>
                <h4>Add A Break</h4>
                <div className='break'>
                    <a>10s</a>
                    <a >20s</a>
                    <a>30s</a>
                    <a>40s</a>
                    <a>50s</a>

                </div>
                
                <h4>Exercise Details</h4>
                <div className='inpo'>
                <h5>Exercise time: {cart.length}</h5>
                </div>
                <div className='inpo'>
                <h5>Break time :  </h5>
                </div>
                <button >Activity Completed</button>
            </div>
            
        </div>
    )
};

// toast.configure()
 

// function GeeksforGeeks(){
    
   
//     const notify = ()=>{
 
        
//         toast('Hello Geeks')
//     }
    
// }

export default Gym;