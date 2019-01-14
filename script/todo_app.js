
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
	    this.state = {isComplete: props.startingState};

	    // This binding is necessary to make `this` work in the callback
	    this.handleClick = this.completeTask.bind(this);
	}

	completeTask() {
		if(this.state.isComplete == "NEW_TASK"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"INCOMPLETE\"");
			this.setState({isComplete: "INCOMPLETE"});
		}
		else if(this.state.isComplete == "INCOMPLETE"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"COMPLETE\"");
			this.setState({isComplete: "COMPLETE"});
		}
		else if(this.state.isComplete == "COMPLETE"){
			console.log("[STATE isComplete] \""+this.state.isComplete+"\" => \"INCOMPLETE\"");
			this.setState({isComplete: "INCOMPLETE"});
		}
		else {
			console.log("Error changing state \"isComplete\"");
			console.log(this.state.isComplete);
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

		let state_val    = "NEW_TASK";
		let message_val  = "";
		let checkbox_val = "add_task";

		return <Card messsage={message_val} checkbox={checkbox_val} startingState={state_val} />
	}

	renderCardList() {
		let UserData = getUserData();

		let card_list = [];

		for(let i = 0; i < UserData.task_amt; i++){
			
			let state_val    = UserData.task_list[i].isComplete;
			let message_val  = UserData.task_list[i].message;
			let checkbox_val = "checkmark";

			card_list.push(<Card message={message_val} checkbox={checkbox_val} startingState={state_val} />);
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
