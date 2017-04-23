import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {

	handleDelete () {
		const date = this.props.date;
		this.props.onDeleteTodo(date);
	}

	render() {
		return (
			<div className="todoItem">
				<p>
					<span className="itemCont">{ this.props.content }</span>
					<span className="itemTime">{ this.props.date }</span>
					<button className="delBtn" onClick={this.handleDelete.bind(this)}>
						<img className="delIcon" src="/images/delete.png" />
					</button>
				</p>
			</div>
		)
	}
}

TodoItem.propTypes = {
	content: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	// handleDelete: PropTypes.func.isRequired
}

export default TodoItem;
