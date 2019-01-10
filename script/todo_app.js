
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
            <textarea className="textarea">
        	    TEXT
            </textarea>
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

ReactDOM.render(
  <Card />,
  document.getElementById('todo_app_container')
);
