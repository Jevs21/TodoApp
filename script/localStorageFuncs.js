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

		let task_amt_int = parseInt(window.localStorage.getItem("task_amt"));

		let task_list_arr = [];

		for(let i = 0; i < task_amt_int; i++){
			task_list_arr.push(JSON.parse(window.localStorage.getItem('task_'+i)));
		}

		let UserData = {
			task_amt  : task_amt_int,
			task_list : task_list_arr
		}

		console.log("Current user task amount: " + UserData.task_amt);
		console.log(UserData.task_list);

		return UserData;
	}
}

function createTask(message, colour){
	alert(message);
}


function dev_clearLocalStorage() {
	window.localStorage.clear();
	console.log("Local storage cleared.");
}

function dev_addLocalStorage() {
	task_0 = {
		isComplete : "0",
		message    : "This is the first task!",
		color      : "red"
	}
	window.localStorage.setItem('task_0', JSON.stringify(task_0));

	task_1 = {
		isComplete : "0",
		message    : "Make some more dummy data",
		color      : "green"
	}
	window.localStorage.setItem('task_1', JSON.stringify(task_1));


	task_2 = {
		isComplete : "0",
		message    : "Do some actual school work",
		color      : "red"
	}
	window.localStorage.setItem('task_2', JSON.stringify(task_2));

	window.localStorage.setItem('task_amt', '3');

	console.log("Dummy data added to localStorage.");
}