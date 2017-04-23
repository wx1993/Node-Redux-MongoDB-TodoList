import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { initTodo, addTodo, deleteTodo } from '../actions/todoAction'
import TodoList from '../components/todolist'
import TodoForm from '../components/todoform'

class Todo extends React.Component {
	componentDidMount () {
		this.props.dispatch(initTodo())
	}

	handleAddTodo (newTodo) {
		console.log('add new todo...');
		console.log(newTodo);
		this.props.dispatch(addTodo(newTodo))
	}

	handleDeleteTodo (date) {
		console.log('delete a todo...');
		const delete_date = { date }
		this.props.dispatch(deleteTodo(delete_date))
	}

	render() {
		// 这里的 todolist 是在 connect 中以 { todolist: state.todolist } 的形式作为属性传递给 App 组件的
		const { todolist } = this.props
		console.log(todolist);
	  	return (
	  		<div className="container">
				<h2 className="header">Todo List</h2>
				<TodoForm onAddTodo={this.handleAddTodo.bind(this)} />
				<TodoList todolist={todolist} onDeleteTodo={this.handleDeleteTodo.bind(this)} />
	  		</div>
		)
	}
}

// 验证组件中的参数类型
Todo.propTypes = {
	todolist: PropTypes.arrayOf(
		PropTypes.shape({
			content: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

const getTodolist = state => {
	console.log(state);
	return {
		todolist : state.todoReducer
	}
}

export default connect(getTodolist)(Todo)
