const redux = require('redux')

function reducerFunction(state = {counter : 0},action){
switch(action.type){
    case 'Inc' : return {
        counter : state.counter + 1
    }
    case 'Dec' : return {
        counter : state.counter - 1
    }
    default : return state
}
}
const store = redux.createStore(reducerFunction);
 
const subscribeFunction = () =>{
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(subscribeFunction)
store.dispatch({type : 'Inc'})
store.dispatch({type : 'Inc'})
store.dispatch({type : 'Inc'})
store.dispatch({type : 'Inc'})
store.dispatch({type : 'Dec'})
store.dispatch({type : 'Mul'})