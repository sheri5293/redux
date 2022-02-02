const initialState = 5;
const multTheNumber =(state=initialState, actions) =>{   //pass the argument thats help to undrsand more....//
switch(actions.type){        //method//
    case 'MULTIPLY':return state * actions.payload;
    case 'DIVIDE':return state / 5;
    default: return state;
}
}

export default multTheNumber;