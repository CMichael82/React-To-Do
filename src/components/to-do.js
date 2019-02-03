import React, { Component } from "react";
import "./to-do.css";

class ListItem extends React.Component {

	state = {
		active: false
	}

	toggleClass(id) {
		console.log(id);
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	};

	render() {
		return <li
			className={this.state.active ? "completed" : "notCompleted"}
			id={this.props.id}
			onClick={(id) => this.toggleClass(this.props.id)}
		>
			{this.props.name}
		</li>

	}
}

class ToDo extends Component {
	state = {
		list: [],
		addingItem: "",
		completed: []
	};

	handleInputChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleAddItem = (event) => {
		event.preventDefault();
		this.setState({
			list: [...this.state.list, this.state.addingItem],
			addingItem: ""
		});
	}


	render() {
		return (
			<div className="container">

				<form>

					<h3>A (very) BASIC REACT TO DO LIST</h3>
					<div className="form-group">
						<input
							id="addItem"
							placeholder="Your To Do..."
							name="addingItem"
							onChange={this.handleInputChange}>
						</input>
						<button
							className="btn btn-success addBtn"
							onClick={this.handleAddItem}>
							Add
				</button>
					</div>

					{this.state.list.length ? (
						<ol className="results">
							{this.state.list.map((toDo, index) => (
								<ListItem
									key={"item-" + index}
									id={index}
									name={toDo}
								></ListItem>
							))}
						</ol>
					) : (
							<h6>No Items To Do!</h6>
						)}
				</form>

			</div>
		);
	}
}

export default ToDo;
