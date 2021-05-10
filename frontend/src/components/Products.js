import React,{Fragment, useState, useEffect} from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const ShowProducts = () => {
    

    //use state and hooks
    const [products, setProducts] = useState([]);


    // function to get and show all products
    const getProducts = async () => {
        try{
            
            const response = await fetch("http://localhost:8000/products") 
            const jsonData = await response.json(); 

            //console.log(jsonData);
            setProducts(jsonData);

        }catch(err){
            console.error(err.message);
        }
    }
    
    useEffect(()=>{
        getProducts();
    },[]);
    
    
    //console.log(products);
    
   

    return (

      <Fragment>
        
       {products.map(product => ( // with product object in json

        
            
            
        <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src={product.images[0]} />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>{product.name}</ReactBootStrap.Card.Title>
  </ReactBootStrap.Card.Body>
  <ReactBootStrap.ListGroup className="list-group-flush">
    <ReactBootStrap.ListGroupItem>{product.price}$</ReactBootStrap.ListGroupItem>
  </ReactBootStrap.ListGroup>
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Link href="#">Buy Now</ReactBootStrap.Card.Link>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

     
        )
        )}

      </Fragment>
    );
};


export default ShowProducts;