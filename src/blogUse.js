import React, { useState } from "react";

function Form() {
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");

	function handleUserNameChange(event) {
		setUserName(event.target.value);
	}

	function handleUserPasswordChange(event) {
		setUserPassword(event.target.value);
	}

	return (
		<form>
			<input type="text" onChange={handleUserNameChange} value={userName} />
			<input
				type="text"
				onChange={handleUserPasswordChange}
				value={userPassword}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
