import { useEffect,useState, useLayoutEffect } from "react";
/////////////////
// useEffect
// 1. cập nhtaaj lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi clearup nếu deps thay đổi
// 5. Gọi useEffect callback

////////////////////
// useLayoutEffect
// 1. Cập nhật lại State
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi lại clearup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
const Content = ()=>{
  const [count,setCount] = useState(0)
  const handleCount = ()=>{
    setCount(count +1)
  }

  useEffect(()=>{
    if(count > 3 ){
      setCount(0)
    }
  },[count])

  return (
    <div>
      <h1>{count}</h1>
      <button 
        onClick={handleCount}
      >
        Run
      </button>
      
    </div>
  )
}

export default Content;