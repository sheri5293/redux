import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  //useSelector is a hook   //dispatch triggle the action... ko call kr ka batata ab yah chaheyaa//
import { incNumber,decNumber,mulNumber,divNumber,  } from '../actions/index';


const App = () => {

 
const myState = useSelector((state) => state.changeTheNumber);  //useSelector is aa hook// ... state 1 is argument//

const myyState = useSelector((state) => state.addTask);

const myotherState = useSelector((state) => state.multTheNumber); 
const dispatch = useDispatch();                //useDispatch is a hook// 
                                              
return(
  <>
    <div className='container'>
    <h1>Increment decrement counter</h1>
    <h4>using react and redux</h4>

    <div className='quantity'>
    <a className='quantity_minus' title='decrement' onClick={()=>dispatch(decNumber())}><span> -- </span></a>
    <input type='text' name='quantity' value={myState} className='quantity_input'/>
    <a className='quanity_plus' title='Increment' onClick={()=>dispatch(incNumber(3))}><span>+</span></a>

    </div>

    </div>


    <div className='container my-5'>
    <h1>Multiplication divison counter</h1>
    <h4>using react and redux</h4>

    <div className='quantity'>
    <a className='quantity_minus' title='decrement' onClick={()=>dispatch(divNumber())}><span> / </span></a>
    <input type='text' name='quantity' value={myotherState} className='quantity_input'/>
    <a className='quanity_plus' title='Increment' onClick={()=>dispatch(mulNumber(5))}><span>*</span></a>

    </div>

    </div>

  </>
  );
};

export default App;
