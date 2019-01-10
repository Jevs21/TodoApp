class ColourSelector extends React.Component {
    render() {
        return (
    		<button className="blue">
    		</button>
    		<button className="green">
    		</button>
    		<button className="red">
    		</button>
        );
    }
}

class Textarea extends React.Component {
    render() {
        return (
            <textarea className="textarea">
        	    {/* TODO */}
            </textarea>
        );
    }
}

class Checkmark extends React.Component {
	render() {
		return (
			<button className="checkmark">
		    	{/* TODO */}
		    </button>
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
		    	<div className="checkmark_conainer">
		    		{ this.renderCheckmark() }
		    	</div>
		    	<div className="textarea_conainer">
		    		{ this.renderTextarea() }
		    	</div>
		    	<div className="colour_selector_conainer">
		    		{ this.renderColourSelector() }
		    	</div>
		    </div>
		);
	}
}

const domContainer = document.querySelector('#todo_app_container');
ReactDOM.render(e(LikeButton), domContainer);
