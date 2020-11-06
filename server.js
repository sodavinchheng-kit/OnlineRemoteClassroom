const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')

let users = []
let messages = []

mongoose.connect('mongodb://127.0.0.1:27017/chatapp')

const ChatSchema = mongoose.Schema({
	username: String,
	msg: String
})

const ChatModel = mongoose.model('chat', ChatSchema)

ChatModel.find((err, result) => {
	if (err) throw err

	messages = result
})

io.on('connection', socket => {
	socket.emit('logged-in', {
		users: users.map(s => s.username),
		messages: messages
	})

	socket.on('new-user', username => {
		console.log(`${username} has entered the chat!`)
		socket.username = username
		users.push(socket)

		io.emit('user-online', socket.username)
	})

	socket.on('msg', msg => {
		let message = new ChatModel({
			username: socket.username,
			msg: msg
		})

		message.save((err, result) => {
			if (err) throw err

			messages.push(result)
			io.emit('msg', result)
		})
	})

	// Disconnect
	socket.on('disconnect', () => {
		console.log(`${socket.username} has left the chat!`)
		io.emit('user-left', socket.username)
		users.splice(users.indexOf(socket.username), 1)
	})
})

const PORT = process.env.PORT || 3000
http.listen(PORT, () => {
	console.log(`Server Running on Port ${PORT}`)
})
