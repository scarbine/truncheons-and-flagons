import {startGamePage} from "../Games/startGame.js"
// generate the html for adding a new player that is called from the click event listener of the add player button
export const AddNewTeam= () => {
	
	return `
	<section class="new_team_input"> 
		<form class="add_new_team_form">
			<label for="teamName">New Team Name</label>
			<input type="text" id="teamName" name="teamName">	
		</form>
		<button id="submit_new_team"> Add New Team </button>
	</section>
	`
}

const mainContainer = document.querySelector(".container")

document.addEventListener("click",(event) => {
	if (event.target.id === "submit_new_team"){
		mainContainer.innerHTML = startGamePage()
		console.log("submit new Team is connected")
	}
} )