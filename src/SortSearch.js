function SortSearch({ search, setSearch }) {
	return (
		<form className="searchbar" name="search">
			<input
				type="text"
				id="search"
				placeholder="search trails..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
}

export default SortSearch;
