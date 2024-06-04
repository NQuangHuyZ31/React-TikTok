import { useEffect,useState, useLayoutEffect,
  useRef, useMemo,
  memo
 } from "react";
 import App from "./App";
/////////////////Trình tự thực hiện
// useEffect
// 1. cập nhật lại state
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
const Content = ({onIncrease})=>{
  console.log('re-render')
  return (
    <>
      <h1>hello</h1>
      <button onClick={onIncrease}>Click me</button>
    </>
      
  )
}

export default memo(Content);