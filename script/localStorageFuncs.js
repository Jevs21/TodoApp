function checkForUserData(){
	if (window.localStorage.getItem("task_amt") === null) {
		console.log("New user detected.");
		return false;
	}
	else {
		console.log("Preexisting user detected.");
		return true;
	}
}

function createNewUserData(){
	window.localStorage.setItem('task_amt', '0');
	console.log("New user data created.");
}

function getUserData(){
	if (window.localStorage.getItem("task_amt") === null) {
		console.log("Error in getUserData. No User data present.");
		return null;
	}
	else {
		let task_amt = parseInt(window.localStorage.getItem("task_amt"));
		console.log("Current user task amount: " + task_amt);

		return null;
	}
}

function createTask(message, colour){
	alert(message);
}

function getTask(msg){
	return msg + "!!";
}