import express from "express";
import { config } from "./config/config.js";

const DISPLAY_MSG = `👌Serving at http://${config.HOST}:${config.PORT}`;

const app = express();

app.use(express.static("src/public"));

app.use((request, response, next) => {
	response.status(404).send("pagina no encontrada");
});

app.listen(config.PORT, () => {
	console.log(DISPLAY_MSG);
});
