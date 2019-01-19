
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
	    	isComplete: props.startingState,
	    	colour    : props.colour
	    };

	    // This binding is necessary to make `this` work in the callback
	    this.completeTask = this.completeTask.bind(this);
	}

	completeTask() {

		let taskName_update   = "";
		let isComplete_update = "";
		let message_update    = "";
		let color_update      = "";

		if(this.state.isComplete == "NEW_TASK"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"INCOMPLETE\"");
			this.setState({isComplete: "INCOMPLETE"});
			
			taskName_update   = this.props.name;
			isComplete_update = "INCOMPLETE";
			message_update    = this.props.message;
			color_update      = this.props.colour;
		}
		else if(this.state.isComplete == "INCOMPLETE"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"COMPLETE\"");
			this.setState({isComplete: "COMPLETE"});

			taskName_update   = this.props.name;
			isComplete_update = "COMPLETE";
			message_update    = this.props.message;
			
		}
		else if(this.state.isComplete == "COMPLETE"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"INCOMPLETE\"");
			this.setState({isComplete: "INCOMPLETE"});

			taskName_update   = this.props.name;
			isComplete_update = "INCOMPLETE";
			message_update    = this.props.message;
			
		}
		else {
			console.log("Error changing state \"isComplete\"");
			console.log(this.state.isComplete);
		}

		let update_err = updateUserData(taskName_update, isComplete_update, message_update);
		if(!update_err){
			console.log("Error updating user data.");
		}
	}

		

	renderTextarea() {
		return <Textarea message={this.props.message} />;
	}

	render() {
		return (
		    <div className="card_container">
		    	<div className="checkmark_container">
		    		<div 
		    		className={this.props.checkbox}
		    		onClick={this.completeTask}
		    		>
				    {this.state.isComplete}
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
	renderCard() {

		let task_name    = "new_task";
		let state_val    = "NEW_TASK";
		let message_val  = "";
		let colour_val   = "none";

		return <Card name={task_name} messsage={message_val} colour={colour_val} startingState={state_val} />
	}

	renderCardList() {
		let UserData = getUserData();

		let card_list = [];

		for(let i = 0; i < UserData.task_amt; i++){
			
			let task_name    = UserData.task_list[i].name;
			let state_val    = UserData.task_list[i].status;
			let message_val  = UserData.task_list[i].message;
			let colour_val   = UserData.task_list[i].colour;

			card_list.push(<Card name={task_name} message={message_val} colour={colour_val} startingState={state_val} />);
		}

		return card_list;
	}

	render() {
		return (
			<div className='app_container'>
				<div className="add_task_container">
					{ this.renderCard() }
				</div>
				<div className='task_list_container'>
					{ this.renderCardList() }
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
