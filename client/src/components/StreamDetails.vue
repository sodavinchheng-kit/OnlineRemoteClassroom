<template>
	<v-card flat>
		<v-expansion-panels>
			<v-expansion-panel>
				<v-row>
					<v-col cols="1" class="text-right">
						<v-avatar color="teal" class="mt-1" size="50">
							<v-icon size="50" dark>mdi-account</v-icon>
						</v-avatar>
					</v-col>
					<v-col cols="10" class="text-left">
						<div class="headline font-weight-bold">Design Pattern</div>
						<div class="body-2 font-weight-light">Vignesh Manoharan</div>
					</v-col>
					<v-col cols="1">
						<v-row>
							<v-icon color="#ff0000">mdi-circle</v-icon>
							<div class="subtitle-1 font-weight-bold ml-2">Live</div>
						</v-row>
						<v-row>
							<v-icon>mdi-eye</v-icon>
							<div class="subtitle-1 ml-2">42</div>
						</v-row>
					</v-col>
				</v-row>

				<v-divider></v-divider>

				<v-expansion-panel-header>
					<div class="link">Show Details</div>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						pariatur expedita doloribus ipsa alias quia maiores, repudiandae
						reiciendis optio. Deleniti molestias fugit excepturi architecto enim
						omnis illo fugiat assumenda blanditiis!
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
						perferendis. Amet, ducimus eaque. Cupiditate porro odit reiciendis
						quidem fuga minus numquam impedit aliquam? Quis dicta, cumque quidem
						necessitatibus a magni!
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
						perferendis. Amet, ducimus eaque. Cupiditate porro odit reiciendis
						quidem fuga minus numquam impedit aliquam? Quis dicta, cumque quidem
						necessitatibus a magni!
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
						perferendis. Amet, ducimus eaque. Cupiditate porro odit reiciendis
						quidem fuga minus numquam impedit aliquam? Quis dicta, cumque quidem
						necessitatibus a magni!
					</div>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-card>
</template>

<script>
export default {
	name: 'streamdetails'
}
</script>

<style scoped>
.link {
	color: #0275d8;
	text-decoration: underline;
}
</style>
