
export const initialState={
    basket:[{
        id:'123323',
        title:'HP 14" HD Laptop Newest Stream, Intel Celeron Quad-Core Processor, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, WiFi, Bluetooth, HDMI, Webcam, USB Type-A&C w/GM Accessory',
        price:219.99,
        rating:4,
        image:'https://m.media-amazon.com/images/I/413eiUutzJL._AC_.jpg'

    },
    {
        id:'123323',
        title:'HP 14" HD Laptop Newest Stream, Intel Celeron Quad-Core Processor, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, WiFi, Bluetooth, HDMI, Webcam, USB Type-A&C w/GM Accessory',
        price:219.99,
        rating:4,
        image:'https://m.media-amazon.com/images/I/413eiUutzJL._AC_.jpg'

    }],
    user:null,
}
function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {...state,basket:[...state.basket,action.item]}
        case 'REMOVE_FROM_BASKET':
            //clone basket
            let newBasket=[...state.basket];

            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)

            if(index>=0){
                //item exists,remove it
                newBasket.splice(index,1)
            
            }
            else{
                console.warn(`cant remove product (id ${action.id} as its not in the basket`)
            }
            return {...state,basket:newBasket}
        default:
            return state
    }
}
export default reducer
