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
		slack_name,
		current_day,
		utc_time: date,
		track,
		github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
		github_repo_url: "https://github.com/username/repo",
		status_code: 200,
	});
});

app.listen(port, () => {
	console.log("Server is running");
});
