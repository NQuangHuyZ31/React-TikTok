import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer
} from 'react';
import {setJob,addJob,deleteJob} from './action'
import Reducer,{initState} from './reducer'

// useReducer
// 1. init state :0
// 2. Action: state -1, state +1
// 3. Reducer
// 4. Dispatch
// sử dụng useReducer
  
  
function TodoApp() {
  // Dispatch
  const inputRef = useRef()
  const [state, dispatch] = useReducer(Reducer,initState)
  
  const {job,jobs} = state
  console.log(state)
  const hanndleSubmit = ()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div className="App" style={{padding:20}}>
      <h3>Todo</h3>
      <input
      ref={inputRef}
        value={job}
        placeholder='Enter Todo....'
        onChange={e=>{
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={hanndleSubmit}>ADD</button>
      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>
            {job}
            <span onClick={()=>dispatch(deleteJob(index))}>&times;</span>
          
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default TodoApp;
