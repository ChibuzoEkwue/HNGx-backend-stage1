import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	const { slack_name, track } = req.query;

	const date = new Date();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const current_day = days[date.getDay()];

	res.json({
		slack_name:
			slack_name ||
			"Enter your slackname by passing it as a value to the query params slack_name",
		current_day,
		utc_time: date,
		track:
			track ||
			"Enter your track by passing it as a value to the query params track",
		github_file_url:
			"https://github.com/ChibuzoEkwue/HNGx-backend-stage1/blob/main/app.js",
		github_repo_url: "https://github.com/ChibuzoEkwue/HNGx-backend-stage1",
		status_code: 200,
	});
});

app.listen(port, () => {
	console.log("Server is running");
});
