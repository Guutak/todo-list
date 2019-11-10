import React, { useState } from "react";
import Trash from "./img/trash.png";
import "./App.css";

function App() {
	const [inputList, setInputList] = useState("");
	const [list, setList] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		const newList = [...list];
		newList.push({ name: inputList });
		setList(newList);
		setInputList((e.target.value = ""));
	};

	const handleclick = e => {
		e.target.parentNode.remove(e.target.parentNode);
	};

	const handleToggleCheck = e => {
		if (e.target.nextSibling.classList.contains("isActive")) {
			return e.target.nextSibling.classList.remove("isActive");
		} else {
			document
				.getElementById("list-container--detail")
				.appendChild(e.target.parentNode);

			return e.target.nextSibling.classList.add("isActive");
		}
	};

	return (
		<div className="list-container">
			<h1>To-do List</h1>

			<form onSubmit={handleSubmit}>
				<ul id="list-container--detail">
					{list.map((task, index) => {
						return (
							<div className="todo-info" key={index}>
								<img
									type="image"
									className="todo-svg"
									src={Trash}
									alt="Delete"
									onClick={handleclick}
								/>

								<input
									className="checklist"
									type="checkbox"
									onChange={handleToggleCheck}
								/>

								<li className="todo-text">{task.name}</li>
							</div>
						);
					})}
				</ul>
				<input
					className="input-list"
					placeholder="List"
					name="todoList"
					value={inputList}
					onChange={e => {
						setInputList(e.target.value);
					}}
				/>
				<button type="submit">ajouter une tâche</button>
			</form>
		</div>
	);
}

export default App;
