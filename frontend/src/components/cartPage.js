import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartPage() {

    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const handleDelete=(id)=>{
let index=cart.findIndex(item=>{
return item.id==id
})
if(index!==-1){
let newcart=[...cart]
newcart.splice(index,1)
dispatch({type:'UPDATE_CART',payload:newcart})
}
    }

    return (
        <div>
            {
                cart.map((item,i)=>{

                    return <div style={{padding:'10px',backgroundColor:'#eee',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<div style={{flex:1}}>
<p>{item.name}</p> 
    </div>
    <div style={{flex:1}}>

<p>{item.quantity}</p> 
</div>

<p>{item.price}</p> <button onClick={()=>handleDelete(item.id)}>X</button>

                        </div>
                })
            }
        </div>
    )
}
