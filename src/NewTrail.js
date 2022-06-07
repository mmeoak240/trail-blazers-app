import React, { useState } from "react";

const NewTrail = ({ handleSubmit }) => {
	const [formData, setFormData] = useState({
		image: "",
		trailName: "",
		location: "",
		difficulty: "",
		description: "",
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	}

	return (
		<>
			<h1 id="formHeading" className="center">
				Contribute!
			</h1>
			<form
				className="create"
				onSubmit={(e) => handleSubmit(e, formData, setFormData)}
			>
				<label className="create">Image</label>
				<input
					className="create"
					id="image"
					type="text"
					onChange={handleChange}
					value={formData.image}
				/>
				<label className="create">Trail Name</label>
				<input
					className="create"
					id="trailName"
					type="text"
					onChange={handleChange}
					value={formData.trailName}
				/>
				<label className="create">Location</label>
				<input
					className="create"
					id="location"
					type="text"
					onChange={handleChange}
					value={formData.location}
				/>
				<label className="create">Difficulty</label>
				<input
					className="create"
					id="difficulty"
					type="text"
					onChange={handleChange}
					value={formData.difficulty}
				/>
				<label className="create">Description</label>
				<input
					className="create"
					id="description"
					type="text"
					onChange={handleChange}
					value={formData.description}
				/>
				<button className="create-button" type="submit">
					Submit
				</button>
			</form>
		</>
	);
};

export default NewTrail;
