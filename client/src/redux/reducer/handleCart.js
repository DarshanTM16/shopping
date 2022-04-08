const cartData = []

const handleCart = (state = cartData, action)=> {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ]
            break;

        case "REMOVEITEM":
            return state = state.filter((x)=> {
                return x._id !== action.payload._id
            })
            break;
        
        case "PLUS":
            let temp = state.map((elem)=> {
                return action.payload === elem._id ? {...elem, qty: elem.qty + 1} : elem
                
            });
            return temp
            break;

            case "SUB":
                let tempr = state.map((elem)=> {
                    return action.payload === elem._id ? {...elem, qty: elem.qty - (elem.qty > 1 ? 1:0) } : elem
                    
                });
                return tempr
                break;
        default:
            return state
    }
}

export default handleCart;
