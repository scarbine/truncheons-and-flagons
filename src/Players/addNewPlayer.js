import { startGamePage } from "../Games/startGame.js"
import { getTeamPlayerList, getTeams } from "../dataAccess.js"

// generate the html for adding a new player that is called from the click event listener of the add player button
export const AddNewPlayer = () => {


	
	
	
	// loop the list of teams and filter out the teams with 3 players or more
	// push the teams with 3 players or less into new array
	// map the new array to display html of the teams that can be chosen

	const filteredTeams = []
	const getAvailableTeams = () => {
		const teams = getTeams()
		const teamPlayerList = getTeamPlayerList()
		for (const team of teams) {
			const filteredPlayers = teamPlayerList.filter(listItem => listItem.teamId === team.id)
			if (filteredPlayers.length < 3) {
				filteredTeams.push(team)
			}
		}
	}
	getAvailableTeams()


	
	return `
	<section class="player_info_input"> 
		<form class="add_new_player_form">
			<div class="player_option">
				<label for="firstName">First Name</label>
				<input type="text" id="firstName" name="firstName"><br><br>
			</div>
			<div class="player_option">
				<label class="player_input" for="lastName">Last Name</label>
				<input type="text" id="lastName" name="lastName"><br><br>
			</div>
			<div class="player_option">
				<label for="choose_team">Choose a Team</label>
				<select name="player_team_picker" id="player_team_picker">
				${filteredTeams.map((team) => {
					return `<option value="${team.id}">${team.teamName}</option>`}).join("") }
				</select>	
			</div>
		</form>
		<button id="submit_new_player"> Add New Player </button>
	</section>
	`
}

const mainContainer = document.querySelector(".container")

document.addEventListener("click",(event) => {
	if (event.target.id === "submit_new_player"){

		// const firstName = document.getElementById("firstName").value
		// const lastName = document.getElementById("lastName").value
		// const playerTeam = document.getElementById("player_team_picker").value
		
		// mainContainer.innerHTML = startGamePage()
		// console.log("submit new player is connected", firstName, lastName, playerTeam)

		const pendingPlayer = {
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			teamId: parseInt(document.getElementById("player_team_picker").value)
		}

		mainContainer.innerHTML = startGamePage()
		console.log("Pending player: ", pendingPlayer )
	}
} )