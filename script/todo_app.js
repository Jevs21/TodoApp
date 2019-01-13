
class ColourSelector extends React.Component {

    render() {
        return (
        	<div className="colour_selector_container">
	    		<div className="blue_button">
	    		</div>
	    		<div className="green_button">
	    		</div>
	    		<div className="red_button">
	    		</div>
	    	</div>
        );
    }
}

class Textarea extends React.Component {
	
    render() {
        return (
            <input type="text" name="new_task" className="textarea" />
        );
    }
}

class Checkmark extends React.Component {
	render() {
		return (
			<div className="checkmark">
		    	C
		    </div>
		);
	}
}


class Card extends React.Component {
	renderColourSelector() {
		return <ColourSelector />;
	}
	renderTextarea() {
		return <Textarea />;
	}
	renderCheckmark() {
		return <Checkmark />;
	}


	render() {
		return (
		    <div className="card_container">
		    	<div className="checkmark_container">
		    		{ this.renderCheckmark() }
		    	</div>
		    	<div className="textarea_container">
		    		{ this.renderTextarea() }
		    	</div>
		    	
		    	{ this.renderColourSelector() }
		    	
		    </div>
		);
	}
}

class AddTaskSection extends React.Component {
	renderCard() {
		return <Card />
	}

	render() {
		return (
			<div className="add_task_container">
				{ this.renderCard() }
			</div>
		);
	}
}

class TaskList extends React.Component {
	renderCard() {
		return <Card />
	}

	render() {
		return (
			<div className='task_list_container'>
				{ this.renderCard() }
			</div>
		);
	}
}


class App extends React.Component {
	renderAddTaskSection() {
		return <AddTaskSection />;
	}
	renderTaskList() {
		return <TaskList />;
	}

	render() {
		return (
			<div className='app_container'>
				{ this.renderAddTaskSection() }
				{ this.renderTaskList() }
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('todo_app_container')
);
