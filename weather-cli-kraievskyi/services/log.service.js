import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ' + ' ' + error));
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ' + ' ' + message));
};

const printHelp = () => {
	console.log(
		dedent(
			`${chalk.bgCyan(' HELP ')}
		Без параметрів - показ погоди
		-s [CITY] для встановлення міста
		-h допомога
		-t [API_KEY] для збереження токена
		`
		)
	)
};

const printWeather = (res, icon) => {
	console.log(
		dedent(
			`${chalk.bgYellow(' Weather ')} Погода в місті ${res.name}
			${icon} ${res.weather[0].description}
			Температура: ${res.main.temp} (відчувається як: ${res.main.feels_like})
			Вологість: ${res.main.humidity}%
			Швидкість вітру: ${res.wind.speed} м/с
		`
		)
	)
};

export { printSuccess, printError, printHelp, printWeather }
