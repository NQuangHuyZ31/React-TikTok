import Content from './Content';
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallBack,
  useMemo
  
} from 'react';

//random gift
const course = [
  {
    id:1,
    name:'Javacript'
  },
  {
    id:2,
    name:'HTML,CSS'
  },
  {
    id:3,
    name:'ReactJS'
  }
  
]


function App() {
const [show,setShow] = useState(false)

  

  return (
    <div className="App" style={{padding:20}}>
      <button onClick={()=>setShow(!show)}>Show</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
