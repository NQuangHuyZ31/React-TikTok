function Logger(Reducer){


  return (prevState,action)=>{
    console.group(action.type)
    console.log('PrevState',prevState)
    console.log('Action',action)

    const newState = Reducer(prevState,action)

    console.log('Next State',newState);
    console.groupEnd()

    return newState
  };

}

export default Logger;