import $ from 'jquery'

// 定义 action type 为常量
export const INIT_TODO = 'INIT_TODO'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

// create action
export function initTodo () {
	// 这里的 action 是一个 Trunk 函数,可以将 dispatch 和 getState() 传递到函数内部
	return (dispatch, getState) => {
		$.ajax({
			url: '/getTodolsit',
			type: 'get',
			dataType: 'json',
			success: data => {
				// console.log(data)
				// 请求成功,分发 action, 这里的 dispatch 是通过 Redux Trunk Middleware 传递过来的
				dispatch({
					type: 'INIT_TODO',
					todolist: data.reverse()
				})
			},
			error: () => {
				console.log('获取 todolist 失败...')
			}
		})
	}
}

export function addTodo (newTodo) {
	return (dispatch, getState) => {
		$.ajax({
			url: '/addTodo',
			type: 'post',
			dataType: 'json',
			data: newTodo,
			success: data => {
				// console.log(data)
				dispatch({
					type: 'ADD_TODO',
					todolist: data.reverse()
				})
			},
			error: () => {
				console.log(err)
			}
		})
	}
}

export function deleteTodo (date) {
	// console.log(date)
	return (dispatch, getState) => {
		$.ajax({
			url: '/deleteTodo',
			type: 'post',
			dataType: 'json',
			data: date,
			success: data => {
				// console.log(data)
				dispatch({
					type: 'DELETE_TODO',
					todolist: data.reverse()
				})
			},
			error: () => {
				console.log(err)
			}
		})
	}
}