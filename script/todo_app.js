
class Textarea extends React.Component {
	
    render() {
        return (
            <input type="text" name="new_task" className="textarea" value={this.props.message}/>
        );
    }
}


class Card extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	status    : props.startingState,
	    	colour    : props.colour
	    };

	    // This binding is necessary to make `this` work in the callback
	    this.completeTask = this.completeTask.bind(this);
	}

	completeTask() {

		let taskName_update   = this.props.name;
		let isComplete_update = "";
		let message_update    = this.props.message;
		let color_update      = this.props.colour;;

		if(this.state.status == "NEW_TASK"){
			console.log("[STATE status] \""+this.state.status+"\" => \"INCOMPLETE\"");
			
			this.setState({status: "INCOMPLETE"});
			isComplete_update = "INCOMPLETE";

		}
		else if(this.state.status == "INCOMPLETE"){
			console.log("[STATE status] \""+this.state.status+"\" => \"COMPLETE\"");
			
			this.setState({statuse: "COMPLETE"});
			isComplete_update = "COMPLETE";	

		}
		else if(this.state.status == "COMPLETE"){
			console.log("[STATE status] \""+this.state.status+"\" => \"INCOMPLETE\"");
			
			this.setState({status: "INCOMPLETE"});
			isComplete_update = "INCOMPLETE";
			
		}
		else {
			console.log("Error changing state \"status\"");
			console.log(this.state.status);
		}

		let update_err = updateUserData(taskName_update, isComplete_update, message_update);
		if(!update_err){
			console.log("Error updating user data.");
		}
		this.props.updateFunc()
	}

		

	renderTextarea() {
		return <Textarea message={this.props.message} />;
	}

	render() {
		return (
		    <div className="card_container">
		    	<div className="checkmark_container">
		    		<div 
		    		className={this.props.status}
		    		onClick={this.completeTask}
		    		>
				    {this.state.status}
				    </div>
		    	</div>
		    	
		    	<div className="textarea_container">
		    		{ this.renderTextarea() }
		    	</div>
		    	
		    	<div className="colour_selector_container">
		    		<div className="blue_button">
		    		</div>
		    		<div className="green_button">
		    		</div>
		    		<div className="red_button">
		    		</div>
		    	</div>
		    	
		    </div>
		);
	}
}


class App extends React.Component {
	
	constructor(props) {
	    super(props);

	    // This binding is necessary to make `this` work in the callback
	    this.updateHandler = this.updateHandler.bind(this);
	}

	updateHandler() {
		render();
	}

	renderCard() {

		let task_name    = "new_task";
		let state_val    = "NEW_TASK";
		let message_val  = "";
		let colour_val   = "none";

		return <Card 
				name={task_name} 
				messsage={message_val} 
				colour={colour_val} 
				startingState={state_val}
				updateFunc={this.updateHandler}
			   />
	}

	renderIncompleteCardList() {
		let UserData = getUserData();

		let card_list = [];

		for(let i = 0; i < UserData.task_amt; i++){
			
			let task_name    = UserData.task_list[i].name;
			let state_val    = UserData.task_list[i].status;
			let message_val  = UserData.task_list[i].message;
			let colour_val   = UserData.task_list[i].colour;

			if(state_val == "INCOMPLETE"){
				card_list.push(<Card name={task_name} message={message_val} colour={colour_val} startingState={state_val} updateFunc={this.updateHandler}/>);
			}
		}

		return card_list;
	}

	renderCompleteCardList() {
		let UserData = getUserData();

		let card_list = [];

		for(let i = 0; i < UserData.task_amt; i++){
			
			let task_name    = UserData.task_list[i].name;
			let state_val    = UserData.task_list[i].status;
			let message_val  = UserData.task_list[i].message;
			let colour_val   = UserData.task_list[i].colour;

			if(state_val == "COMPLETE"){
				card_list.push(<Card name={task_name} message={message_val} colour={colour_val} startingState={state_val} updateFunc={this.updateHandler} />);
			}		
		}

		return card_list;
	}

	render() {
		return (
			<div className='app_container'>
				<div className="new_task_container">
					{ this.renderCard() }
				</div>
				<div className='incomplete_task_container'>
					{ this.renderIncompleteCardList() }
				</div>
				<div className='complete_task_container'>
					{ this.renderCompleteCardList() }
				</div>
			</div>
		);
	}

}
if(!checkForUserData()){
	createNewUserData();
}

ReactDOM.render(
  <App />,
  document.getElementById('todo_app_container')
);
