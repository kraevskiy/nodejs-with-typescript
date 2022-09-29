import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email not correct' })
	email: string;

	@IsString({ message: 'Password not set' })
	password: string;

	@IsString({ message: 'Name not set' })
	name: string;
}
