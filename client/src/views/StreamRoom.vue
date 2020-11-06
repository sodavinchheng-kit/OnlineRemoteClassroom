<template>
	<v-app>
		<v-btn @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
			<v-icon :class="$vuetify.theme.dark ? 'd-flex' : 'd-none'"
				>mdi-white-balance-sunny</v-icon
			>
			<v-icon :class="$vuetify.theme.dark ? 'd-none' : 'd-flex'"
				>mdi-moon-waning-crescent</v-icon
			>
		</v-btn>

		<v-simple-table>
			<tr>
				<td style="width: 75%">
					<StreamBox />
				</td>
				<td style="width: 25%">
					<ChatBox />
				</td>
			</tr>
		</v-simple-table>
	</v-app>
</template>

<script>
import ChatBox from '../components/ChatBox'
import StreamBox from '../components/StreamBox'
// import BlankLayout from "../layouts/Blank";

export default {
	name: 'stream',
	components: {
		ChatBox,
		StreamBox
	}
	//   created() {
	//     this.$emit("update:layout", BlankLayout);
	//   }
}
</script>
