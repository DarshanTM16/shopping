
export const addItem = (product)=> {
    console.log(product);
    return{
        type: "ADDITEM",
        payload: product
    }
};


export const removeItem = (product)=> {
    return{
        type: "REMOVEITEM",
        payload: product
    }
};

export const plus = (id)=> {
    return{
        type: "PLUS",
        payload: id
    }
};

export const sub = (id)=> {
    return{
        type: "SUB",
        payload: id
    }
}