import { combineReducers, createStore } from 'redux'
import { INIT_TODO, ADD_TODO, DELETE_TODO } from '../actions/todoAction'

// 在 reducer 第一次执行的时候，没有任何的 previousState, 因此需要定义一个 initialState,
// 下面使用 es6 的写法为 state 赋初始值
function todoReducer (state = [], action) {
  console.log(action);
  switch (action.type) {
    case INIT_TODO:
      return action.todolist
      break
    case ADD_TODO:
      return action.todolist
      break
    case DELETE_TODO:
      return action.todolist
      break
    default:
      return state
  }
}

// 将多个 reducer 合并成一个
const rootReducer = combineReducers({ todoReducer })

export default rootReducer
