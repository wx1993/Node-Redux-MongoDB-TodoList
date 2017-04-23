import React from 'React'
import PropTypes from 'prop-types'

class TodoForm extends React.Component {

  // 表单输入时隐藏提示语
  handleKeydown () {
    this.refs.tooltip.style.display = 'none'
  }
  
  // 提交表单操作
	handleSubmit (e) {
		e.preventDefault();
		// 表单输入为空验证
		if(this.refs.content.value == '') {
			this.refs.content.focus()
      this.refs.tooltip.style.display = 'block'
			return ;
		}

    // 获取时间并格式化
		let month = new Date().getMonth() + 1;
		let date = new Date().getDate();
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		if (hours < 10) { hours += '0'; }
		if (minutes < 10) { minutes += '0'; }
		if (seconds < 10) { seconds += '0'; }

		// 生成参数
		const newTodo = {
			content: this.refs.content.value,
			date: month + "/" + date + " " + hours + ":" + minutes + ":" + seconds
		};
		this.props.onAddTodo(newTodo)
		this.refs.todoForm.reset();
	}

  render () {
    return (
      <form className="todoForm" ref="todoForm" onSubmit={ this.handleSubmit.bind(this) }>
        <input ref="content" onKeyDown={this.handleKeydown.bind(this)} type="text" placeholder="Type content here..." className="todoContent" />
        <span className="tooltip" ref="tooltip">Content is required !</span>
      </form>
    )
  }
}

export default TodoForm
