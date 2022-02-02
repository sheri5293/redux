const initialState = 0;
const changeTheNumber =(state=initialState, actions) =>{   //pass the argument thats help to undrsand more....//
switch(actions.type){        //method//
    case 'INCREMENT':return state + actions.payload;
    case 'DECREMENT':return state-1;
    default: return state;
}
}

export default changeTheNumber;