import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let index = cart.findIndex((item) => {
      return item.id == id;
    });
    if (index !== -1) {
      let newcart = [...cart];
      newcart.splice(index, 1);
      dispatch({ type: "UPDATE_CART", payload: newcart });
    }
  };
let total=0

cart.map((item,i)=>{
 let price=parseFloat( item.price*item.quantity)
 if(!isNaN(price)){
   total+=price
 }
})

  return (
    <div>
        <div
            style={{
              padding: "10px",
              backgroundColor: "#eee",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center',
              margin:'20px',
              borderRadius:'10px'
              
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{margin:'0px'}}>Item</p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{margin:'0px'}}>Quantity</p>
            </div>
            <div style={{padding:'10px'}}>
              <p style={{margin:'0px'}}>Price</p>{" "}
            </div> 
          </div>
      {cart.map((item, i) => {
        return (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#eee",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center',
              margin:'20px',
              borderRadius:'10px'
              
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{margin:'0px'}}>{item.name}</p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{margin:'0px'}}>{item.quantity}</p>
            </div>
            <div style={{padding:'10px'}}>
            <p style={{margin:'0px'}}>$ {item.price*item.quantity}</p>{" "}
               </div> 
            <button style={{borderColor:'transparent',backgroundColor:'transparent',color:'red'}} onClick={() => handleDelete(item.id)}>X</button>
          </div>
        );
      })}
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',margin:'40px'}}>
<div>
  Total Price: ${total} 
</div>
      </div>
    </div>
  );
}

