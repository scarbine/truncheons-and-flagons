import { startGamePage } from "../Games/startGame.js"

// generate the html for adding a new player that is called from the click event listener of the add player button
export const AddNewPlayer = () => {
	
	return `
	<section class="player_info_input"> 
		<form class="add_new_player_form">
			<div class="player_option">
				<label for="firstName">First name:</label>
				<input type="text" id="firstName" name="firstName"><br><br>
			</div>
			<div class="player_option">
				<label class="player_input" for="lastName">Last name:</label>
				<input type="text" id="lastName" name="lastName"><br><br>
			</div>
			<div class="player_option">
				<label for="choose_team">Choose a Team:</label>
				<select name="player_team_picker" id="player_team_picker">
				<option value="{teamId}">Map the teams and filter based on who is not full.</option>  
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
		mainContainer.innerHTML = startGamePage()
		console.log("submit new player is connected")
	}
} )