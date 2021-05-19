const initial ={
    cart:[]
}
const cart_reducer=(store=initial,action )=>{
    switch(action.type){
case "UPDATE_CART":{
return({cart:action.payload})
}
default:
        return store
    }
}
export default cart_reducer