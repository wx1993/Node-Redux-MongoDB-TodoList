var express = require('express');
var Todo = require('../src/database/db')
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'React TodoList'
	});
});

// 获取 todolist
router.get('/getTodolsit', (req, res, next) => {
	Todo.find({}, (err,todolist) => {
		if (err) {
			console.log(err);
		}else {
			console.log(todolist);
			res.json(todolist);
		}
	})
});

// 添加 todo
router.post('/addTodo', (req, res, next) => {
	const newItem = req.body;
	Todo.create(newItem, (err) => {
		if (err) {
			console.log(err);
		}else {
			Todo.find({}, (err, todolist) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todolist);
				}
			});
		}
	})
})

// 删除 todo
router.post('/deleteTodo', (req, res, next) => {
	const delete_date = req.body.date

	Todo.remove({date: delete_date}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			// 重新获取 todolist
			Todo.find({}, (err, todolist) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todolist);
				}
			})
		}
	});
});

module.exports = router;
