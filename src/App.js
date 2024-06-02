import logo from './logo.svg';
import './App.css';
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallBack,
  useMemo
  
} from 'react';


function App() {
  
    const [state, setState] = useState(1)
    const handleIncrease = ()=>{
      setState(preState => preState +1)
    }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{state}</h1>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
