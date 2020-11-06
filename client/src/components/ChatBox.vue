<template>
	<v-app>
		<v-card class="my-2" elevation="10">
			<v-system-bar color="primary" dark>
				<v-spacer></v-spacer>

				<v-icon>mdi-window-minimize</v-icon>

				<v-icon>mdi-window-maximize</v-icon>

				<v-icon>mdi-close</v-icon>
			</v-system-bar>

			<v-card-title>ChatRoom</v-card-title>
			<v-card-subtitle>
				Username: {{ username }}
				<v-spacer></v-spacer>
				Online: {{ users.length }}
			</v-card-subtitle>

			<v-container>
				<v-card class="chat-box" elevation="10">
					<div
						class="message"
						v-for="message in messages"
						v-bind:key="message._id"
					>
						<div class="message-text py-2">
							<span class="username">{{ message.username }}</span>
							: {{ message.msg }}
						</div>
						<v-divider></v-divider>
					</div>
				</v-card>
				<v-form
					class="mt-10"
					@submit.prevent="sendMessage()"
					autocomplete="off"
				>
					<v-text-field
						label="Enter Your Message Here"
						type="text"
						filled
						rounded
						dense
						outlined
						v-model="msg"
						append-outer-icon="mdi-send"
						@click:append-outer="sendMessage()"
					/>
				</v-form>
			</v-container>
		</v-card>
	</v-app>
</template>

<script>
import io from 'socket.io-client'

export default {
	name: 'chatbox',
	data() {
		return {
			username: '',
			socket: io('http://10.10.17.72:3000'),
			users: [],
			messages: [],
			msg: ''
		}
	},
	methods: {
		joinServer() {
			this.socket.on('logged-in', data => {
				this.messages = data.messages
				this.users = data.users
				this.socket.emit('new-user', this.username)
			})

			this.listen()
		},
		listen() {
			this.socket.on('user-online', user => {
				this.users.push(user)
			})

			this.socket.on('user-left', user => {
				this.users.splice(this.users.indexOf(user), 1)
			})

			this.socket.on('msg', message => {
				this.messages.push(message)
			})
		},
		sendMessage() {
			if (!this.msg) {
				console.log('No Message')
				return
			}

			console.log(this.msg)
			this.socket.emit('msg', this.msg)
			this.msg = ''
		}
	},
	mounted() {
		this.username = prompt('What is your username?', '[Anonymous]')

		if (!this.username) {
			this.username = '[Anonymous]'
		}

		this.joinServer()
	}
}
</script>

<style scoped>
.chat-box {
	height: 500px;
	overflow: auto;
}
.username {
	text-decoration: underline;
	font-weight: bold;
	color: #0275d8;
}
</style>
