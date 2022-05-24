import TrailsContainer from "./TrailsContainer";

const Home = ({ trails }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${"https://wallpaperaccess.com/full/28995.jpg"})`,
				height: 1000,
			}}
		>
			<TrailsContainer trails={trails} />
		</div>
	);
};

export default Home;
