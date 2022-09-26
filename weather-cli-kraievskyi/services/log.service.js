import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ' + ' ' + error));
}

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ' + ' ' + message));
}

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
}

export { printSuccess, printError, printHelp }
