import React from 'react';
import PropTypes from 'prop-types'
import Todo from './todo';

class TodoList extends React.Component {

  	render() {
  		const todolist = this.props.todolist;
      console.log(todolist);
  		const todoItems = todolist.map((item, index) => {
  			return (
          <Todo
    					key={index}
    					content={item.content}
    					date={item.date}
    					onDeleteTodo={this.props.onDeleteTodo}
          />
    		)
      });

    	return (
    		<div>
    			{ todoItems }
    		</div>
    	)
  	}
}

// propTypes 用于规范 props 的类型与必需的状态，在开发环境下会对组件的 props 进行检查，
// 如果不能与之匹配，将会在控制台报 warning。在生产环境下不会进行检查。（解决 JS 弱语言类型的问题）

// arrayOf 表示数组类型， shape 表示对象类型
TodoList.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default TodoList;
