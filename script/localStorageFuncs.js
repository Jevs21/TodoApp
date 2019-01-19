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

function updateUserData(name, status, msg, colour){

	// Add param error checking
	console.log("CARD DATA: " + name + ", " + status + ", " + msg + ", " + colour );

	//let task_amt_int = parseInt(window.localStorage.getItem("task_amt"));

	update = {
		name    : task,
		status  : is_complete,
		message : msg,
		colour  : colour
	}
	window.localStorage.setItem(task, JSON.stringify(update));

	//task_amt_int += 1;

	//window.localStorage.setItem("task_amt", task_amt_int);

	return true;
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
		name    : "task_0",
		status  : "COMPLETE",
		message : "This is the first task!",
		colour  : "red"
	}
	window.localStorage.setItem('task_0', JSON.stringify(task_0));

	task_1 = {
		name    : "task_1",
		status  : "INCOMPLETE",
		message : "Make some more dummy data",
		colour  : "green"
	}
	window.localStorage.setItem('task_1', JSON.stringify(task_1));


	task_2 = {
		name    : "task_2",
		status  : "COMPLETE",
		message : "Do some actual school work",
		colour  : "red"
	}
	window.localStorage.setItem('task_2', JSON.stringify(task_2));

	window.localStorage.setItem('task_amt', '3');

	console.log("Dummy data added to localStorage.");
}