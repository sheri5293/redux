import React from 'react';
import { useState } from 'react';
import { addTask, delTask,removeTask } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'; // useDispatch is a hook in redux // useSelector is a hook in react which is used alternate of map for looping//

export const ToDo = () => {
  const [tasks, setTasks] = useState(''); // using hooks
  const list = useSelector((state) => state.addTaskThing.list); // using hooks
  const dispatch = useDispatch();

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>

          <div className='addItems'>
            <input
              type='text'
              placeholder='Enter your task'
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
            />

            <i
              className='fa fa-plus add-btn'
              onClick={() => dispatch(addTask(tasks), setTasks(''))}
            ></i>
          </div>

          <div className='showItems'>
            { list.map((elem) => {
              //elem cur data//
              return (
                <div className='eachItem' key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className='todo-btn'>
                    <i
                      className='far fa-trash-alt add-btn'
                      title='Delete Item'
                      onClick={() => dispatch(delTask(elem.id))}
                    ></i>
                  </div>
                </div>
              )
            })
            }        
          </div>
<div className='showItems'>
    <button className='btn effect04' data-sm-link-text="remove All" onClick={()=>dispatch(removeTask())}><span>Check List</span></button>
</div>


        </div>
      </div>
    </>
  );
};
export default ToDo;
