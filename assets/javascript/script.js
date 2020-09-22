//IMPORTANT!
$(document).ready(function(){

    // INITIALIZING FIREBASE
    // ================
    
    // GLOBAL VARIABLES
    // ================
    
    // FUNCTIONS
    // ============
    function saveUserData() {
		var Player1 = document.getElementById('Player1').value;
		var Player2 = document.getElementById('Player2').value;
		var Player3 = document.getElementById('Player3').value;
		var Player4 = document.getElementById('Player4').value;
		var Player5 = document.getElementById('Player5').value;
		var Player6 = document.getElementById('Player6').value;

		console.log("Player 1 is " + Player1);
		console.log("Player 2 is " + Player2);
		console.log("Player 3 is " + Player3);
		console.log("Player 4 is " + Player4);
		console.log("Player 5 is " + Player5);
		console.log("Player 6 is " + Player6);
	 }

	 function addPlayers(){

	 }
	
	
    // MAIN PROCESS
    // ============
    $('#startNewGame').on('click', function(event){
		// This prevents the form from trying to submit itself and reseting the page.
		event.preventDefault();

		//Run the saveUserData function to get the names of the Players
		saveUserData();



	});	// End Of On Click Event
    
    
    
    
    
    
    
    
    
    }); //IMPORTANT!
    