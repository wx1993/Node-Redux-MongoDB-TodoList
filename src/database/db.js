var mongoose = require('mongoose')

// 定义数据模式，指定保存到 todo 集合
const TodoSchema = new mongoose.Schema({
	content: {
		type: String, 
		required: true
	},
	date: {
		type: String, 
		required: true
	}
}, { collection: 'todo' })

// 定义数据集合的模型
const Todo = mongoose.model('TodoBox', TodoSchema)

module.exports = Todo

/***
* 因为项目比较简单，只涉及一个数据集合，所以直接将 schema 和 model 写在一个文件中，
* 如果涉及多个数据集合，建议将 schema 和 model 放在不同的文件中
***/