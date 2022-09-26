import { resolve } from 'path';

const filePath = resolve('./weather-data.json');

const saveKeyValue = (key, value) => {
	console.log(filePath)
};

export { saveKeyValue }
