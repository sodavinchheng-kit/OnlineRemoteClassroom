<template>
	<div class="home">
		<h1>This is the HomePage</h1>
		<v-card v-for="device in devices" :key="device.deviceId" class="my-5">
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<v-dialog v-model="editDevice" width="500px">
							<v-card>
								<v-card-title class="headline grey lighten-2" primary-title
									>Edit Device</v-card-title
								>

								<v-container>
									<v-text-field label="Enter New Device Name"></v-text-field>
								</v-container>

								<v-divider></v-divider>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn text @click="editDevice = false">Cancel</v-btn>
									<v-btn text @click="editDevice = false">Confirm</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>

						<div class="d-flex justify-lg-space-between pa-4">
							<v-card flat>
								<span class="headline">
									<v-btn icon @click.stop="editDevice = true">
										<v-icon>mdi-pencil</v-icon>
									</v-btn>
									{{ device.deviceName }}
								</span>
							</v-card>
							<v-card flat>
								{{ device.online }}
							</v-card>
						</div>
						<!-- <div class="headline">{{device.name}}</div>

            <div
              :class="(device.isOnline ? 'green--text' : 'red--text') + ' font-weight-bold body-1'"
            >{{device.isOnline ? 'Online' : 'Offline'}}</div>-->
						<!-- <div v-if="!device.isOnline" class="red--text font-weight-bold body-1">Offline</div> -->
					</v-expansion-panel-header>

					<v-divider></v-divider>

					<v-expansion-panel-content class="ma-5">
						<!-- <div v-if="device.isConnected">Connected to: {{device.connectedDevice}}</div>
            <div v-if="!device.isConnected">Not Connected</div>-->
						<div class="subtitle-1">
							<span class="font-weight-bold">
								{{ device.cameraPlugged ? 'Connected to: ' : '' }}
							</span>
							{{ device.cameraPlugged ? '' : 'Not Connected' }}
						</div>
						<!-- <div v-if="device.isStreaming">Currently Streaming: {{device.currentlyStreaming}}</div>
            <div v-if="!device.isStreaming">Not Streaming</div>-->
						<div class="subtitle-1">
							<span class="font-weight-bold">
								{{ device.streaming ? 'Currently Streaming: ' : '' }}
							</span>
							{{ device.streaming ? '' : 'Not Streaming' }}
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-card>
	</div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '../layouts/Default'
import axios from 'axios'

export default {
	name: 'home',
	components: {},
	created() {
		this.$emit('update:layout', DefaultLayout)
	},
	data() {
		return {
			editDevice: false,
			devices: []
		}
	},
	mounted() {
		axios
			.get('http://10.10.18.24:3000/devices')
			.then(res => {
				this.devices = res.data
				console.log(res.data)
				console.log('hdsh')
			})
			.catch(err => console.log(err))
	}
}
</script>
