export const incNumber = (num) => {
    return{
        type: 'INCREMENT',
        payload: num                  //payload ki jagah kuch bi likh sakty hain 
        
    }
}

export const decNumber = () => {
    return{
        type: 'DECREMENT'
        
    }
}

export const mulNumber = (num) => {
    return{
        type: 'MULTIPLY',
        payload: num
    }
}


export const divNumber = (num) => {
    return{
        type: 'DIVIDE',
        payload: num
    }
}