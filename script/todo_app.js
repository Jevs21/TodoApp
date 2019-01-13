
class Textarea extends React.Component {
	
    render() {
        return (
            <input type="text" name="new_task" className="textarea" />
        );
    }
}


class Card extends React.Component {

	renderTextarea() {
		return <Textarea />;
	}


	render() {
		return (
		    <div className="card_container">
		    	<div className="checkmark_container">
		    		<div className="checkmark">
				    	{ getThe(this.props.test) }
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
		return <Card test="Ayy"/>
	}

	render() {
		return (
			<div className='app_container'>
				<div className="add_task_container">
					{ this.renderCard() }
				</div>
				<div className='task_list_container'>
					{ this.renderCard() }
				</div>
			</div>
		);
	}

}
if(!checkForUserData()){
	createNewUserData();
}

let UserData = getUserData();

ReactDOM.render(
  <App />,
  document.getElementById('todo_app_container')
);
