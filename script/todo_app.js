
class Textarea extends React.Component {
	
    render() {
        return (
            <input type="text" name="new_task" className="textarea" value={this.props.message}/>
        );
    }
}


class Card extends React.Component {

	renderTextarea() {
		return <Textarea message={this.props.message} />;
	}


	render() {
		return (
		    <div className="card_container">
		    	<div className="checkmark_container">
		    		<div className="checkmark">
				    	C
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
		// Add properties to define a blank (input) card
		return <Card />
	}

	renderCardList() {
		let UserData = getUserData();

		let card_list = [];

		for(let i = 0; i < UserData.task_amt; i++){
			let message_val = UserData.task_list[i].message;
			card_list.push(<Card message={message_val} />);
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
