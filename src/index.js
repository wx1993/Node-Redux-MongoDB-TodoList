import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import Todo from './containers/app'
import rootReducer from './reducers/todoReducer'

// 打印日志方法
const loggerMiddleware = createLogger()

// applyMiddleware() 用来加载 middleWare
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)

// 创建 store 对象
const store = createStoreWithMiddleware(rootReducer)

// 获取到的 store 是空的?
console.log(store.getState())

// 注册 subcribe 函数，监听 state 的每一次变化
const unsubscribe = store.subscribe(() => console.log(store.getState()) );

ReactDOM.render(
	<Provider store={store}>
		<Todo />
	</Provider>,
	document.getElementById("app")
);
