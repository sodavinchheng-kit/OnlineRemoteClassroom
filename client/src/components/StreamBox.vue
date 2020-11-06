<template>
	<v-app>
		<div id="meet" class="mt-2 stream">
			<v-card v-if="!hasLoaded" class="loading-message" flat color="#0275d8">
				<v-row justify="space-around">
					<v-card-title class="header justify-space-around white--text"
						>The Stream is Loading!! Please Wait!!</v-card-title
					>
				</v-row>
				<v-row justify="space-around">
					<v-progress-circular
						indeterminate
						class="mb-6"
						color="white"
					></v-progress-circular>
				</v-row>
			</v-card>
		</div>

		<StreamDetails />
	</v-app>
</template>

<script>
import StreamDetails from './StreamDetails'

export default {
	name: 'streambox',
	components: {
		StreamDetails
	},
	// metaInfo: {
	// 	title: 'StreamRoom',
	// 	script: [
	// 		{ src: 'https://meet.jit.si/external_api.js', async: true, defer: true }
	// 	]
	// },
	data() {
		return {
			hasLoaded: false
		}
	},
	created() {
		const JitsiMeet = require('jitsi-meet-wrapper')

		const options = {}

		const meet = new JitsiMeet('https://meet.jit.si')
		meet.on('ready', () => {
			this.hasLoaded = true
			const conference = meet.join('Darwin', '#meet', options)
			conference.on('joined', () => {
				console.log('We are in!')
			})
		})
	}
}
</script>

<style scoped>
.stream {
	height: 600px;
	background-color: #0275d8;
	border: 5px solid #0275d8;
}
.loading-message {
	position: relative;
	top: 40%;
}
</style>
