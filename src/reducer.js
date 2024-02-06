
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
            return {...state, basket:state.basket.filter(item=>item.id!==action.item.id)}
        default:
            return state
    }
}
export default reducer
