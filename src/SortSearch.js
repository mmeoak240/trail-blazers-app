import React, { useState } from "react";

function SortSearch({
	search,
	setSearch,
	sortDifficulty = { sortDifficulty },
}) {
	const [checked, setChecked] = useState(true);
	return (
		<div>
			<form className="searchbar" name="search">
				<input
					type="text"
					id="search"
					placeholder="search trails..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<label>
					<input
						type="checkbox"
						class="filled-in"
						checked={checked}
						onChange={(e) => sortDifficulty(e)}
					/>
					<span style={{ color: "black", opacity: 1 }}>Sort By Difficulty</span>
				</label>
			</form>
		</div>
	);
}

export default SortSearch;
