const NewTrail = () => {
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={handleFirstNameChange} value={name} />
			<input type="text" onChange={handleLastNameChange} value={location} />
			<input type="text" onChange={handleLastNameChange} value={difficulty} />
			<input type="text" onChange={handleLastNameChange} value={description} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default NewTrail;
