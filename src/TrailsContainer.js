import React, { useState, useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import TrailCard from "./TrailCard";
import TrailDescription from "./TrailDescription";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
		root: {
			flexGrow: 1,
		},
	})
);

const TrailsContainer = ({ trails }) => {
	const classes = useStyles();

	const match = useRouteMatch();
	const displayTrails = trails.map((trail) => (
		<TrailCard trail={trail} trails={trails} />
	));
	return (
		<div>
			<h1 style={{ color: "sienna" }} className="center">
				Blaze These Trails
			</h1>

			<Grid container spacing={3}>
				<Grid item xs={6} sm={3}>
					{displayTrails}
				</Grid>
				<Route path={`${match.url}/:trailId`}>
					<TrailDescription trails={trails} className={classes.paper} />
				</Route>
			</Grid>
		</div>
	);
};

export default TrailsContainer;
